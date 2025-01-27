import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [MatButtonModule, NgFor],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent {
  listImages = [
    'images/bg1.jpg',
    'images/bg2.jpg',
    'images/bg3.jpg'
  ]
}
