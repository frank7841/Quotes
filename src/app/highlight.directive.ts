import { Directive, ElementRef } from '@angular/core';
import{MyQuote} from './my-quote'


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

}
