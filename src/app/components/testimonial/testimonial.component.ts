import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TestimonialComponent {
  @ViewChild('testimonialSwiper') swiper!: ElementRef<SwiperContainer>;

  testimonials = [
    {
      image: 'images/potonabil.jpeg',
      name: `Nabil Fadilah`,
      role: 'Mahasiswa',
      graduationDate: 2024,
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      image: 'images/helo.jpeg',
      name: `Alif Razan Saputra`,
      role: 'Guru',
      graduationDate: 2024,
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
    },
  ]
}
