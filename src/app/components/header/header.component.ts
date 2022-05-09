import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerData = {
    menuItems: [
      { id: 1, name: 'Home', slug: '/' },
      { id: 2, name: 'About', slug: 'about' },
      { id: 3, name: 'Services', slug: 'services' },
      { id: 4, name: 'Contact', slug: 'contact' }
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
