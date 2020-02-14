import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(private elemenRef: ElementRef) { 
    this.elemenRef.nativeElement.style.color = "Red";
  }

}
