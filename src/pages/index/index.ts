import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { ApiProvider } from '../../providers/api';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  public user = { name: '', platform: 'ps4' };
  public users: any;
  public loading: any;

  public hide: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public apiService: ApiProvider,
    public toastCtrl: ToastController,
  ) { }

  get() {
    this.load();
    this.apiService.getUsers(this.user)
      .then(data => {
        this.loading.dismiss();
        this.hide = true;
        this.user.name = '';
        this.users = data;
      })
      .catch(err => { this.loading.dismiss(); var message = 'Usuário não encontrado'; this.toast(message); });
  }
  //
  showDetails(id) {
    this.load();
    this.apiService.getDetails(id).then(
      data => {
        var dados = data;
        this.apiService.getSeasonDetails(id)
          .then(data => { this.loading.dismiss(); this.navCtrl.push('HomePage', { dados: dados, seasons: data }) })
          .catch(err => { this.loading.dismiss(); var message = 'Erro ao buscar dados'; this.toast(message); })
      },
    ).catch(
      err => { this.loading.dismiss(); var message = 'Usuário não joga Rainbow Six'; this.toast(message); }
    );
  }
  load() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'carregando'
    });
    this.loading.present();
  }
  toast(message) {
    let alert = this.toastCtrl.create({
      message: message,
      position: 'bottom',
      duration: 3000,
    });
    alert.present();
  }
}
