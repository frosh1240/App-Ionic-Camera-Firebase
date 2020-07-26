import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})
export class InitialPage implements OnInit {
  myPhoto:any;
  constructor(private camera:Camera) { }
  slideOpts = {
    initialSlide:1,
    speed:400
  } 
  ngOnInit() {
    /*
    const options: CameraOptions = {
      quality:90,
      destinationType:this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum:true,
      sourceType:1
    }

    this.camera.getPicture(options).then((imageData) => {
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    },(err) => {
    });
    */
  }

}
