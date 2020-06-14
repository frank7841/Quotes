import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import {MyQuote} from '../my-quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new MyQuote (0,"","","",0,0,new Date);
  @Output() addQuote = new EventEmitter<MyQuote>();
  submitQuote(){
    this.addQuote.emit(this.newQuote) ;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
