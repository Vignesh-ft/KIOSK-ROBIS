import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verticals-card',
  templateUrl: './verticals-card.component.html',
  styleUrl: './verticals-card.component.css'
})
export class VerticalsCardComponent {
  @Input() name:string = ""
  @Input() img:string = ""
  @Input() desc:string = ""
  @Input() URL:string = ""
}
