import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from '../core/components/input/input.component';
import { CardComponent } from '../core/components/card/card.component';

@Component({
  selector: 'app-layout',
  standalone:true,
  imports: [CardComponent,InputComponent],

  templateUrl: './layout.component.html',

  styleUrl: './layout.component.scss'
})
export class LayoutComponent  {
  var = 'alison';

}

