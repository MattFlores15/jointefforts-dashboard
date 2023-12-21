// src/app/homepage/homepage.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  showSidebar = true; // Sidebar is shown by default
  cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
  showLogoutModal = false;

  constructor() {}

  ngOnInit(): void {}

  showLogoutConfirmation() {
    this.showLogoutModal = true;
  }

  logout() {
    // Implement logout logic here
    this.showLogoutModal = false;
  }

  cancelLogout() {
    this.showLogoutModal = false;
  }
}
