import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-web',
  imports: [HeaderComponent, BannerComponent],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {

}
