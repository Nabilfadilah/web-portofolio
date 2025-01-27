import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SwiperContainer } from 'swiper/element';
@Component({
  selector: 'app-news',
  imports: [MatButtonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent {
  @ViewChild('newSwiper') swiper!: ElementRef<SwiperContainer>;

  listNews = [
    {
      title: 'Contoh 1',
      tag: 'berita 1',
      datePost: new Date('2022-10-12'),
      author: 'ALIF',
      image: 'images/bpjs.png'
    },
    {
      title: 'Contoh 2',
      tag: 'berita 2',
      datePost: new Date('2022-10-12'),
      author: 'ALIF',
      image: 'images/kis.jpg'
    },
    {
      title: 'Contoh 3',
      tag: 'berita 3',
      datePost: new Date('2022-10-12'),
      author: 'ALIF',
      image: 'images/ketenaga.jpg'
    },
  ]

  onPrev() {
    this.swiper.nativeElement.swiper.slideNext();
  }
  onNext() {
    this.swiper.nativeElement.swiper.slideNext();
  }
}
