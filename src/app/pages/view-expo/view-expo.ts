import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExposService } from '../../providers/expos.service';
import * as firebase from 'firebase';
//import {Slides} from "@ionic/angular";
import{ Media, MediaObject} from '@ionic-native/media/ngx';
//import { LoadingController,Content } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import {Expo} from '../../interfaces/expo';

@Component({
  selector: 'app-view-expo',
  templateUrl: './view-expo.page.html',
  styleUrls: ['./view-expo.page.scss'],
})
export class ViewExpoPage implements OnInit {

  slug='';
  expo:Expo;
  totalPages=0;
  currentIndex=1;
  pages= new Array<any>();
  urlMp3="";
  file:MediaObject;
  isPlaying=false;
  sound='play';
  nextStep=true;
  prevStep=false;
  txtPlay;
  duration="";
  loaderSound=false;
  @ViewChild("slider")slider;
  @ViewChild('pageTop') pageTop;

  /*
  @ViewChild(Slides)slides:Slides;
  @ViewChild('pageTop') pageTop: Content;
  */

  constructor(
    private activatedRoute: ActivatedRoute,
    private expoProvider:ExposService,
    private media:Media,
    public loadingController: LoadingController,
    private router:Router,
  ) { }

  ngOnInit() {
    this.slug=this.activatedRoute.snapshot.params['slug'];
    this.getExpo();
    this.nextStep=true;
  }

  public ngOnDestroy() {
    this.unload(); 
  }

  async getExpo(){
    let loading = await this.loadingController.create({
      message: 'Chargement en cours ...',
    });
    await loading.present();

    var storage = firebase.storage();
  
    this.expoProvider.getOneExpo(this.slug).then((data)=>{
      this.expo=data;
    })
    .then(()=>{
      storage.ref().child(this.expo.image).getDownloadURL().then((url)=>{
        this.expo.imageUrl=url;
      
      });
    })
    .then(()=>{
      this.expoProvider.getPages(this.expo).then((data)=>{
        this.totalPages = data.length;
        this.pages=data;
        //pour chaque page on genere l'url de l'image et du mp3
        
        this.pages.forEach(page=>{
            if(page.image){
              storage.ref().child(page.image).getDownloadURL().then(function(url){
                  page.image=url;
              });
            }
            if(page.mp3){
              storage.ref().child(page.mp3).getDownloadURL().then(function(url){
                page.mp3=url;
              });
            }
        });
        
      }).then(()=>{
        //Enleve le loading
        this.loadFirstSlide();
        this.expoProvider.setCurrentExpo(this.expo);
        loading.dismiss(); 
      });
    })
   
  }

  loadFirstSlide(){
    //Load les infos de la premiere page
    this.currentIndex=1;
    this.loadMp3();
  }


  slideChanged(){
    this.unload(); 
    this.pageTop.scrollToTop();

    this.slider.getActiveIndex().then(res=>{
      this.currentIndex=res+1;
      if(this.currentIndex>this.totalPages){
        this.currentIndex=this.totalPages;
      }
      
      if(this.currentIndex>=this.totalPages){
        this.nextStep=false;
      }else{
        this.nextStep=true;
      }
      
      if(this.currentIndex<=1){
        this.prevStep=false;
      }else{
        this.prevStep=true;
      }

      this.loadMp3();
    });
    
  }

  loadMp3(){
    this.unload(); 

    if(typeof this.pages[this.currentIndex-1].mp3!=="undefined"){
      this.urlMp3=this.pages[this.currentIndex-1].mp3;
      const fichier: MediaObject = this.media.create(this.urlMp3);
      this.file=fichier;

      var counter = 0;
      var self=this;
      var timerDur = setInterval(function() {
            counter = counter + 100;
            if (counter > 3000) {
                clearInterval(timerDur);
            }
            var dur = self.file.getDuration();
            if (dur > 0) {
                clearInterval(timerDur);
                self.duration=self.secondsToHms(dur);
            }
      }, 100);
    } 
  }

  secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var mDisplay = m > 0 ? m + (m == 1 ? " min" : " mins") : "";
    if(m>0){
      var sDisplay = s>0 ? " "+s.toString():"";
    }else{
      var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " secs") : "";
    }
    
    return mDisplay + sDisplay; 

  }



  nextRoom(){
    this.slider.getActiveIndex().then(res=>{
      this.slider.slideTo(res+1,300);
    });
  }

  prevRoom(){
    this.slider.getActiveIndex().then(res=>{
      this.slider.slideTo(res-1,300);
    });
  }

  play(){
    if(this.isPlaying==false){
      this.loaderSound=true;
      this.file.play();
      
      this.isPlaying=true;
      this.sound='stop';
      
      var self=this;

      setInterval(function(){
        self.file.getCurrentPosition().then(
          function(position) {
            if (position > 1) {
                //console.log((position) + " sec");
                self.loaderSound=false;
            }
          },
          // error callback
          function(e) {
              //console.log("Error getting pos=" + e);
          }
        );
      },100);
     
    }
  }

  stop(){
    if(this.file){
      this.file.pause();
      this.isPlaying=false;
      this.sound='play';
      this.urlMp3="";
      this.loaderSound=false;
      //delete this.file;
    }
  }

  unload(){
    if(this.file){
      this.file.stop();
      this.file.release();
      this.isPlaying=false;
      this.sound='play';
      this.urlMp3="";
      this.loaderSound=false;
      console.log("Destruction du fichier");
    }
  }



  getInfosExpo(expo){
    this.unload(); 
    this.router.navigateByUrl("/expo/"+expo.slug+"/about");
  }


  ionViewCanLeave() {
    this.unload();
  }


}
