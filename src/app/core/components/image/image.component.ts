import { Component, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-image',
  standalone:true,
  imports: [],

  templateUrl: './image.component.html',

  styleUrl: './image.component.scss'
})
export class ImageComponent implements OnInit {
   @Input() image: string = "";
   ngOnInit(): void {
     console.log(this.image)
   }
   
}

