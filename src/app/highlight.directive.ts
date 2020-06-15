import { Directive, ElementRef, Renderer2 } from '@angular/core';
import{MyQuote} from './my-quote'


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(renderer: Renderer2, elmRef: ElementRef) {
    renderer.setStyle(elmRef.nativeElement, 'color', 'green');
   }

}
