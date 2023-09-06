import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";


const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'About US'
  },

];

export default routeConfig;
