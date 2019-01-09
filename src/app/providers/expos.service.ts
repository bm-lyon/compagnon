import { Injectable } from '@angular/core';
import { Platform } from "@ionic/angular";

//Nécessaire pour les données distantes json
import { Observable } from "rxjs";

import * as firebase from 'firebase';
import 'firebase/firestore';

import {Expo} from '../interfaces/expo';

@Injectable({
  providedIn: 'root'
})
export class ExposService {

  private db: any;
  results : Observable<any[]>;

  currentExpo:Expo;

  constructor(
    private readonly platform:Platform)
    {
      this.db = firebase.firestore();
      const settings = {timestampsInSnapshots: true};
      this.db.settings(settings);
    }


    getOneExpo(slug):Promise<any>{
      return new Promise((resolve, reject) => {
        this.db.collection("expos").where("slug","==",slug)
            .onSnapshot(function (querySnapshot){
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id
                    //console.log(obj)
                    
                    resolve(obj);
                }); 
          });
        });
    }
  
    getPages(expo):Promise<any>{
      return new Promise((resolve, reject) => {
        this.db.collection("expos").doc(expo.$key).collection("listpages").orderBy("order")
            .onSnapshot(function (querySnapshot){
                let arr = [];
                querySnapshot.forEach(function (doc) {
                  var obj = JSON.parse(JSON.stringify(doc.data()));
                  obj.$key = doc.id
                  //console.log(obj)
                  arr.push(obj);
                }); 
                resolve (arr);
          });
        });
    }
  
  
    getExpos(collection: string) :Promise<any>{
      return new Promise((resolve, reject) => {
        this.db.collection(collection).where("valide","==",true)
            .onSnapshot(function (querySnapshot){
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id
                    //console.log(obj)
                    arr.push(obj);
  
                });
                console.log(arr);
                resolve(arr);
          });
        });
    }

    getCurrentExpo(){
      return this.currentExpo;
    }

    setCurrentExpo(expo){
      this.currentExpo=expo;
    }
}
