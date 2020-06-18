import { Component, OnInit } from '@angular/core';
import {MyQuote} from '../my-quote'
@Component({
  selector: 'app-myquotes',
  templateUrl: './myquotes.component.html',
  styleUrls: ['./myquotes.component.css']
})
export class MyquotesComponent implements OnInit {
  quotes: MyQuote[] = [
    new MyQuote (1,'Frankline','Avengers Assemble','Captain America',3,2,new Date()),
  ]
  dateCreated:Date;
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.dateCreated = new Date(quote.dateCreated)
    this.quotes.push(quote)
  }
  quoteDelete(isViewed, index){
    if(isViewed){
    let toDelete = confirm(`Are you syre you want to delete ${this.quotes[index].quote} quote?` );
    if (toDelete) {
      this.quotes.splice(index,1);
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
