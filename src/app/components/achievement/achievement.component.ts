import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-achievement',
  imports: [NgFor],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css'
})
export class AchievementComponent {
  // Array data penghargaan
  achievements = [
    {
      image: 'images/achievement1.png',
      title: 'Penghargaan Pelayanan Terbaik 2023'
    },
    {
      image: 'images/achievement2.jpg',
      title: 'Penghargaan Rumah Sakit Ramah Lingkungan'
    },
    {
      image: 'images/achievement1.png',
      title: 'Penghargaan Inovasi Teknologi Kesehatan'
    },
    {
      image: 'images/achievement2.jpg',
      title: 'Piagam Akreditasi Rumah Sakit 2022'
    }
  ];
}
