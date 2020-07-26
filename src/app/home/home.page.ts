import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router, private platform: Platform, private camera:Camera, public afAuth:AngularFireAuth, public db:AngularFirestore) {  
    this.platform = platform; 

  }

  exitApp(){
    var val=1;
    this.afAuth.auth.signOut().then(function(){
      console.log('saliendo');
    }).catch(function(error){
      console.log(error)
    })

    if(val === 1){
      this.router.navigate(['/session'])
      console.log(val)
    }else{
      console.log(val)
    }
  }

  myPhoto:any;

  getImage(){
    
    const options: CameraOptions = {
      quality:90,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }

    this.camera.getPicture(options).then((imageData) => {
      this.myPhoto = 'data:image/jpeg:base64,' + imageData;
    },(err) => {

    })
  }

  ngOnInit() {
    /*const controller = document.querySelector('ion-alert-controller');
    const button = document.querySelector('ion-button');
    button.addEventListener('click', function(){
      controller.create({
        header:'Cerrar sesión',
        message:'¿Seguro que quieres cerrar sesión',
        buttons:['NO','SI']
      }).then(alert => {
        alert.present();
      })
    });*/
  }

 

}
