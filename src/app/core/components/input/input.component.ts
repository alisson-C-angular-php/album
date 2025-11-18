import { Component,EventEmitter, Input, inputBinding, OnInit, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone:true,
  imports: [],

  templateUrl: './input.component.html',

  styleUrl: './input.component.scss'
})
export class InputComponent  {
   @Input() label: string = "";
   @Output() image:EventEmitter<string> = new EventEmitter<string>();
   algo:string = "";

  setImage(event:any){
    this.algo = event;
  }

  disparaEvento(){
    this.image.emit(this.algo);
  }
}

