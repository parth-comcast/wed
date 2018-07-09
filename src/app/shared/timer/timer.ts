import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  styleUrls: ['./timer.scss']
})
export class TimerComponent implements OnInit {

    public weddingDate: string = "Jan 26, 2019";
    public days: number;
    public hours: number;
    public minutes: number;
    public seconds: number;
    public isTimeArrive: boolean = false;

    private dateInterval: number;
    private countDownDate: number;
  
    public ngOnInit(): void {

        // Set the date we're counting down to
        this.countDownDate = new Date(this.weddingDate).getTime();

        // Update the count down every 1 second
        this.dateInterval = setInterval(this.dateCalc.bind(this) , 1000);

    }

    private dateCalc(): void {
        // Get todays date and time
        let now = new Date().getTime();
        
        // Find the distance between now an the count down date
        let distance = this.countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // If the count down is over, write some text 
        if (distance <= 0) {
            clearInterval(this.dateInterval);
            this.isTimeArrive = true;
        }
    }
}
