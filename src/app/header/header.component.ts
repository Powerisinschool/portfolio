import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  links = [
    { title: 'Home', fragment: 'one', link: '/home' },
    { title: 'About', fragment: 'two', link: '/about' }
  ];
  collapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
