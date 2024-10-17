import { Component ,OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  private header: HTMLElement | null;

  constructor() {
    this.header = document.querySelector('.navbar');
  }

  ngOnInit(): void {
    // Add the scroll event listener when the component is initialized
    window.addEventListener('scroll', this.onWindowScroll);
  }

  ngOnDestroy(): void {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  private onWindowScroll = (): void => {
    const top: number = window.scrollY;
    if (this.header) {
      if (top >= 100) {
        this.header.classList.add('navbarDark');
      } else {
        this.header.classList.remove('navbarDark');
      }
    }
  }
}
