import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  counter: number = 0;
  


  increment(){
    this.counter++;

  }
  decrement(){
    this.counter--;
    
  }

}