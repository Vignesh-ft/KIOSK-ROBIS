import { Component } from '@angular/core';

@Component({
  selector: 'app-corporate-video',
  templateUrl: './corporate-video.component.html',
  styleUrl: './corporate-video.component.css'
})
export class CorporateVideoComponent {
  videoURL="'../../../assets/Corporate Video/Robis video with hardcoded subtitles.mp4"
  videoState = true
  buttonVisible = true

  pauseAndPlay(video:any){
    this.buttonVisible = false
    this.videoState = !this.videoState
    if(this.videoState === true){
      video.play()
    }
    else {
      video.pause()
    }

    setTimeout(()=>{
      this.buttonVisible = true
    },1000)

  }
}
