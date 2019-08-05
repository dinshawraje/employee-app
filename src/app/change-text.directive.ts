import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

   constructor(Element: ElementRef) {
      console.log(Element);
      Element.nativeElement.innerText = "Angular App ";
   }

}
