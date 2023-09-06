import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css'],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
})
export class TopHeaderComponent {

  protected readonly RouterLink = RouterLink;
  protected readonly RouterLinkActive = RouterLinkActive;
}
