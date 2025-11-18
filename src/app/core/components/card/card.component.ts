import { Component, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from "../image/image.component";
import { Console } from 'node:console';

@Component({
  selector: 'app-card',
  standalone:true,
  imports: [ImageComponent],

  templateUrl: './card.component.html',

  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges  {
  @Input() image:string = "";
  
  ngOnChanges(changes: SimpleChanges): void {
     if (changes['image']) {
      const currentValue = changes['image'].currentValue;
      const previousValue = changes['image'].previousValue;
      this.image = currentValue;
      console.log('Valor atual:', currentValue);
      console.log('Valor anterior:', previousValue);
      console.log('É primeira mudança?', changes['image'].firstChange);
    }
  }


}
