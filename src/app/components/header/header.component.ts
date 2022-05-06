import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerData = {
    menuItems: [
      { id: 1, name: 'Home' },
      { id: 2, name: 'About' },
      { id: 3, name: 'Services' },
      { id: 4, name: 'Contact' }
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
