import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-story',
  templateUrl: './my-story.html',
  styleUrls: ['./my-story.scss']
})
export class MyStoryComponent implements OnInit {

    @Input() position: boolean;
    @Input() storyData: object;
  
    public ngOnInit(): void {
        console.log(this.position, this.storyData);
    }
}
