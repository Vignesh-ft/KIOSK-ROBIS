import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.css'
})
export class ImageViewerComponent {
  @Input() imagePath:string = ""
  @Input() imageText:string = ""
}
