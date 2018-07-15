import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  tittle: string;
  imagePreview: string;

  constructor(private viewCtrl: ViewController, private camera: Camera) {
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  showCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
    this.imagePreview = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
      console.log("ERROR IN CAMERA", JSON.stringify(err));
    });
  }

}
