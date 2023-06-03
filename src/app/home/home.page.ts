import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public models = [
    {
      url: 'https://i.pinimg.com/originals/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg',
      title: 'Anna Anninogenova',
      description: "Ukranian, Kiev"
    },
    {
      url: 'https://i.pinimg.com/736x/01/27/54/0127541b2787f5daa5b4eb6ab8b96fb5.jpg',
      title: 'Inna Kuznetsova',
      description: 'Russia, San Petersburg'
    },
    {
      url: 'https://i.pinimg.com/1200x/cd/90/d9/cd90d9de63fa2c8e5c5e7117e27b5c18.jpg',
      title: 'Catalina Madrid',
      description: 'España, Granada'
    },
    {
      url: 'https://i.pinimg.com/originals/0a/1e/be/0a1ebe78c71a1d0a423f5a92fd0dd0da.jpg',
      title: 'Grishia Mahabarata',
      description: 'Singapure '
    },
    {
      url: 'https://i.pinimg.com/550x/f5/a0/62/f5a0626a80fe6026c0ac65cdc2d8ede2.jpg',
      title: "Jennie O'Brian ",
      description: 'Australia, Melbore'
    },
    {
      url: 'https://i.pinimg.com/564x/15/3c/21/153c21116551e420e954ea8f82dde7fe--black-portrait-side-portrait.jpg',
      title: 'Sofía Dos Santos',
      description: 'Portugal, Lisboa'
    },
    {
      url: 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/de1f04b6928e50e2f8c746400d2999ed/99561b8e485129d8ffcde2d1_rw_1200.jpg?h=8e8f2fd0172d68b54e92ae8b512ba026',
      title: 'Anna Dyszkiewicz',
      description: 'Bielorrusia, Minsk'
    }
  ]

  constructor() { }

}
