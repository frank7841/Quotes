import { Component, OnInit } from '@angular/core';
import {MyQuote} from '../my-quote'
@Component({
  selector: 'app-myquotes',
  templateUrl: './myquotes.component.html',
  styleUrls: ['./myquotes.component.css']
})
export class MyquotesComponent implements OnInit {
  quotes: MyQuote[] = [
    new MyQuote (1,'Frankline','Avengers Assemble','Captain America',2,new Date()),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
