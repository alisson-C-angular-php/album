import { Component, Input, inputBinding, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone:true,
  imports: [],

  templateUrl: './input.component.html',

  styleUrl: './input.component.scss'
})
export class InputComponent  {
   @Input() label : string = "";

}

