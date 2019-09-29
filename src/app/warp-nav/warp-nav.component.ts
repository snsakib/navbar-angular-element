import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-warp-nav',
  templateUrl: './warp-nav.component.html',
  styleUrls: ['./warp-nav.component.scss']
})
export class WarpNavComponent {
  //Sets the menu links
  pages = [
    {
      href: '/about',
      linkText: 'About'
    },
    {
      href: '/projects',
      linkText: 'Projects'
    },
    // {
    //   href: "/blog",
    //   linkText: "Blog"
    // },
    {
      href: '/contact',
      linkText: 'Contact'
    }
  ];

  //If the width of screen is equals or greather than 1024px, the value of the property becomes true.
  isLaptop: boolean;

  //Checks the window width & sets the 'isLaptop' property value
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 1024) {
      this.isLaptop = false;
    } else {
      this.isLaptop = true;
    }
  }
  constructor() {}

  ngOnInit() {
    this.onResize();
  }

}
