import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home/home', icon: 'home' },
    { title: 'Destination', url: '/folder/destination/destination', icon: 'paper-plane' },
    { title: 'About', url: '/folder/about/about', icon: 'people' },
  ];
  public labels = ['Coron', 'El Nido', 'Siquijor'];
  constructor() {}
}
