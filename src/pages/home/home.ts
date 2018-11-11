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
  }

  prueba(variable: any){
    console.log('Seleccionó ' + variable);
    this.cargar(variable);
  }

  openItem(item: UserServiceProvider) {
    this.navCtrl.push('DetallePage', {
      item: item
    });
  }

  cargar(cantidad: string){
    this.myApi.getUsuarios(cantidad).subscribe(
      (data) => {
        this.misUsuarios = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ionViewDidLoad(){

  }
}
