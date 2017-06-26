import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServicesProvider } from '../../providers/user-services';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  title: string = 'Filtro de usuarios:';

  sliderValue: number = 100;
  selectedItem: any;
  users: any = [];


  constructor(
    private userServicesProvider: UserServicesProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    this.userServicesProvider.getUser().subscribe(data => {
      this.users = data;
    })
  }

  ionViewWillUnload() {
    this.users = [];
  }

  itemTapped(event, item) {
    this.navCtrl.push('ListPage', {
      item: item
    });
  }
}
