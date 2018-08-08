import { Component, OnInit } from '@angular/core';

import { WindowReference } from '../core/window';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss']
})
export class NavComponent implements OnInit {

    public isMobileNavOpen: boolean = false;
    private winRef: Window;

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

    constructor(winRef: WindowReference) {
        Object.assign(this, { winRef: winRef.get });
    }
    
    public ngOnInit(): void { }

    public toggleMobileNav(): void {
        this.isMobileNavOpen = !this.isMobileNavOpen;
        const body: HTMLBodyElement = this.winRef.document.getElementsByTagName('body')[0];
        body.style.overflow = this.isMobileNavOpen ? 'hidden' : '';
    }
}
