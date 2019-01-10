import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss']
})
export class NavComponent {

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
            label: 'Venue',
            link: 'venue'
        },
        {
            label: 'Gallery',
            link: 'gallery'
        }
    ];

    public generateLink(link): string {
        return '#' + link;
    }
}
