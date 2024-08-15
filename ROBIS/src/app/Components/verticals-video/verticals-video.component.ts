import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verticals-video',
  templateUrl: './verticals-video.component.html',
  styleUrl: './verticals-video.component.css'
})


export class VerticalsVideoComponent {
  @Input() videoURL:string = ""

  playVideo(video:any) {
    video.play()
  }

  pauseVideo(video:any) {
    video.pause()
  }
}
