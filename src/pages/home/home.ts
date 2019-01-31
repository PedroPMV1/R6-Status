import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public icons: string = 'geral';

  public dados: any = this.navParams.data.dados;
  public seasons: any = this.navParams.data.seasons;
  public hide: boolean = false;
  public temporadas: Array<0>;

  public seasonsOrd = ["wind_bastion", "grim_sky", "para_bellum", "chimera", "white_noise", "blood_orchid", "health"];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    console.log(this.navParams.data);
  }
  ionViewDidLoad() { }
}
