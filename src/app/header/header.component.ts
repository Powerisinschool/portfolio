import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  links = [
    { title: 'Home', fragment: 'top', link: '/home' },
    { title: 'About', fragment: 'start', link: '/about' },
    { title: 'Contact', fragment: 'start', link: '/contact' }
  ];
  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
