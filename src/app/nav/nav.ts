import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss']
})
export class NavComponent implements OnInit {

  public links = [
    {
        label: 'Home',
        link: 'home'
    },
    {
        label: 'Love Story',
        link: 'love-story'
    },
    {
        label: 'Gallery',
        link: 'gallery'
    },
    {
        label: 'Venue',
        link: 'venue'
    }
];

  public ngOnInit(): void { }
}
