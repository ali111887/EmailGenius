import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopHeaderComponent } from "./common/top-header/top-header.component";
import {FooterComponent} from "./common/footer/footer.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterModule,
    TopHeaderComponent,
    FooterComponent,
    AboutUsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatGPT';
}
