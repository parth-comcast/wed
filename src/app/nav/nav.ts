import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';

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
            label: 'Venue',
            link: 'venue'
        },
        {
            label: 'Gallery',
            link: 'gallery'
        }
    ];
    
    constructor(private smooth: SimpleSmoothScrollService) {}

    public ngOnInit(): void {
        this.smooth.smoothScrollToAnchor();
    }

    public generateLink(link): string {
        return '#' + link;
    }
}
