import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { BannerComponent } from '@components/banner/banner.component';
import { HeaderMenuComponent } from "@components/header-menu/header-menu.component";
import { AboutUsComponent } from "../../components/about-us/about-us.component";

@Component({
  selector: 'app-web',
  imports: [HeaderComponent, BannerComponent, HeaderMenuComponent, AboutUsComponent],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {

}
