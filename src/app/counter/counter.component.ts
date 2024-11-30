import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() counter: number = 0;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();

  onIncrement(){
    this.increment.emit();
  
  }
  onDecrement(){
    this.decrement.emit();
  }



}
