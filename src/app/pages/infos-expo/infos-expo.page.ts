import { Component, OnInit } from '@angular/core';
import { ExposService } from '../../providers/expos.service';
import {Expo} from '../../interfaces/expo';

@Component({
  selector: 'app-infos-expo',
  templateUrl: './infos-expo.page.html',
  styleUrls: ['./infos-expo.page.scss'],
})



export class InfosExpoPage implements OnInit {

  expo:Expo;

  constructor(
    private expoProvider:ExposService,
  ) { 
  }

  ngOnInit() {
    this.expo=this.expoProvider.getCurrentExpo();
    //console.log(this.expo);
  }


}
