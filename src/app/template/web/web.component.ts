import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { BannerComponent } from '@components/banner/banner.component';
import { HeaderMenuComponent } from "@components/header-menu/header-menu.component";

@Component({
  selector: 'app-web',
  imports: [HeaderComponent, BannerComponent, HeaderMenuComponent],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {

}
