import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ExposService } from '../../providers/expos.service';
import * as firebase from 'firebase';
import { Observable } from "rxjs";
import { PopoverComponent } from '../../components/popover/popover.component';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  expos = new Observable<any>();
  exposNow = new Array<any>();
  exposOld = new Array<any>();

  constructor(    
      private popoverController: PopoverController,
      private expoProvider:ExposService,
      private router:Router,
      public loadingController: LoadingController
    ) {  
              
     }
  
    ionViewDidLoad() {
      
    }
  
  
    goToExpo(expo){
      this.router.navigateByUrl("/expo/"+expo.slug);
    }
  
    async presentPopover(ev:any) {
      const popover = await this.popoverController.create({
        component: PopoverComponent,
        event: ev,
        translucent: true
      });
      return await popover.present();
    }
  
    async getExposList(){
      let loading = await this.loadingController.create({
        message: 'Chargement des expositions',
      });
      await loading.present();

      var currentDate= new Date();
      var storage = firebase.storage();
        this.expoProvider.getExpos("expos").then((data)=>{
          //this.expos = data.reverse();
          for(let expo of data){
            if(expo.image!=""){
              storage.ref().child(expo.image).getDownloadURL().then(function(url){
                expo.imageUrl=url;
              });
    
    
              if(new Date(expo.end) < currentDate){
                this.exposOld.push(expo);
              }else{
                this.exposNow.push(expo);
              }
            }

          }
          this.exposOld.reverse();
          this.exposNow.reverse();
          loading.dismiss();
        });
  
    }
  
  
    ngOnInit() {
      this.getExposList();
    }
  
}
