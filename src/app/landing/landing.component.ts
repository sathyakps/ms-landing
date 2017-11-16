import { Component, OnInit } from '@angular/core';

/**
 * Component with features, template and so on. This is the
 * component used to display the home page of the app SPA.
 */
@Component({
  selector: 'mmw-landing-page',
  styleUrls: ['landing.scss'],
  templateUrl: 'landing.html'
})
export class LandingComponent implements OnInit {

  constructor() {
    console.log('yes');
  }

  ngOnInit() {
    console.log('yes');
  }

}
