import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0.8) translateY(20px)',
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease', style({
              opacity: 0,
              transform: 'scale(0.8) translateY(20px)'
            }))
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0, transform: 'scale(0.8) translateY(20px)' }),
            animate('300ms ease', style({
              opacity: 1,
              transform: 'scale(1) translateY(0)'
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})

export class AppComponent {
  title = 'portfolio';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
