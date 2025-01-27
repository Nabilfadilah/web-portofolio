import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { BannerComponent } from '@components/banner/banner.component';
import { HeaderMenuComponent } from "@components/header-menu/header-menu.component";
import { AboutUsComponent } from "../../components/about-us/about-us.component";
import { NewsComponent } from "../../components/news/news.component";
import { AchievementComponent } from "../../components/achievement/achievement.component";

@Component({
  selector: 'app-web',
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent,
    AboutUsComponent,
    NewsComponent,
    AchievementComponent
  ],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent implements OnInit {
  bannerEl: any;
  headerEl: any;

  // panggil target dengan menggunakan elementRef
  constructor(
    private el: ElementRef
  ) { }

  // biar ada booleannya
  bannerIsScroll: boolean = false;
  // aboutSecIsScroll: boolean = false;

  ngOnInit(): void {
    this.headerEl = this.el.nativeElement.querySelector('#headerId').offsetTop;
    this.bannerEl = this.el.nativeElement.querySelector('#bannerId').offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.bannerIsScroll = window.scrollY > this.headerEl;
    console.log('this.bannerIsScroll', this.bannerIsScroll);
    console.log('this.headerEl', this.headerEl);
    console.log('window.scrolly', window.scrollY);
    // this.aboutSecIsScroll = window.scrollX > this.bannerEl;
  }
}
