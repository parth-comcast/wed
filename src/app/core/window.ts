import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Subscription } from 'rxjs/Subscription';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { distinctUntilChanged } from 'rxjs/operators';

// import { BreakpointWidth } from 'src/app/constants';

function getWindow(): Window {
    return window;
}

@Injectable()
export class WindowReference {
    // private static DEBOUNCE_TIME: number = 300;
    // private static watchingBreakpoint: Breakpoint = {
    //     currentBreakpoint: '',
    //     isLargeDesktop: false,
    //     isMobile: false,
    //     isSmallDesktop: false,
    //     isTablet: false
    // };

    // public breakpoint: Observable<Breakpoint>;
    // public windowWidth: Observable<number>;
    // public scrollSubscription: Observable<Event>;
    // private subscriptions: Subscription[] = [];

    constructor() {
        // const windowRect: BehaviorSubject<Breakpoint> = new BehaviorSubject(this.getBreakpoint());
        // this.breakpoint = (<Observable<Breakpoint>> windowRect).distinctUntilChanged();

        // this.subscriptions.push(Observable.fromEvent(this.get, 'resize').map(this.getBreakpoint).subscribe(windowRect));
        // this.scrollSubscription = Observable.fromEvent(this.get, 'scroll').map((event: Event) => event);

        // this.windowWidth = Observable.fromEvent(this.get, 'resize')
        //     .debounceTime(WindowReference.DEBOUNCE_TIME)
        //     .distinctUntilChanged()
        //     .map((event: Event) => event.target.innerWidth);
    }

    // public ngOnDestroy(): void {
    //     Util.unsubscribeAll(this.subscriptions);
    // }

    public get get(): Window {
        return getWindow();
    }

    // private getBreakpoint(): Breakpoint {
    //     if (window.innerWidth < BreakpointWidth.TABLET &&
    //         !WindowReference.watchingBreakpoint.isMobile) {
    //         WindowReference.watchingBreakpoint = { ...WindowReference.defaultBreakpoint, isMobile: true, currentBreakpoint: 'mobile' };
    //     } else if (window.innerWidth >= BreakpointWidth.TABLET &&
    //                 window.innerWidth < BreakpointWidth.SMALL_DESKTOP &&
    //                 !WindowReference.watchingBreakpoint.isTablet) {
    //         WindowReference.watchingBreakpoint = { ...WindowReference.defaultBreakpoint, isTablet: true, currentBreakpoint: 'tablet' };
    //     } else if (window.innerWidth >= BreakpointWidth.SMALL_DESKTOP &&
    //                 window.innerWidth < BreakpointWidth.LARGE_DESKTOP &&
    //                 !WindowReference.watchingBreakpoint.isSmallDesktop) {
    //         WindowReference.watchingBreakpoint = { ...WindowReference.defaultBreakpoint, isSmallDesktop: true, currentBreakpoint: 'smallDesktop' };
    //     } else if (window.innerWidth >= BreakpointWidth.LARGE_DESKTOP &&
    //                 !WindowReference.watchingBreakpoint.isLargeDesktop) {
    //         WindowReference.watchingBreakpoint = { ...WindowReference.defaultBreakpoint, isLargeDesktop: true, currentBreakpoint: 'largeDesktop' };
    //     }

    //     return WindowReference.watchingBreakpoint;
    // }

    // private static get defaultBreakpoint(): Breakpoint {
    //     return {
    //         currentBreakpoint: '',
    //         isMobile: false,
    //         isTablet: false,
    //         isSmallDesktop: false,
    //         isLargeDesktop: false
    //     };
    // }
}
