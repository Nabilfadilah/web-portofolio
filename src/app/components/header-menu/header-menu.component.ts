import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-menu',
  imports: [MatToolbar, MatMenuModule, MatListModule, MatIconModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  gotoDiv(page: string) {

  }
}
