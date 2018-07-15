import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { UploadPage} from "../upload/upload";

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: Observable<any[]>;

  constructor(private modalController:ModalController,
              private afDB: AngularFireDatabase) {

    this.posts = afDB.list('post').valueChanges();
  }

  showModal(){
    let modal = this.modalController.create(UploadPage);
    modal.present();
  }

}
