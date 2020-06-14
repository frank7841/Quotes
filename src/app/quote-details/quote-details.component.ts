import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MyQuote} from '../my-quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:MyQuote;
  @Output() isViewed = new EventEmitter<boolean>();
  quoteDelete(viewed:boolean){
    this.isViewed.emit(viewed);
  }
  likes:number=0;
  disLikes:number=0;
  incrementUp(quote){
    quote.likes++
  }
  incrementDown(quote){
    quote.disLikes++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
