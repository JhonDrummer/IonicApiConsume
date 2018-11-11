import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  misUsuarios: any[] = [];

  constructor(public navCtrl: NavController, public myApi: UserServiceProvider) {
    this.myApi.getUsuarios().subscribe(
      (data) => {
        this.misUsuarios = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openItem(item: UserServiceProvider) {
    this.navCtrl.push('DetallePage', {
      item: item
    });
  }

  ionViewDidLoad(){

  }
}
