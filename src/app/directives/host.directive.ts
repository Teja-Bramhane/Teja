import { Directive, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({
  selector: "[appHost]"
})
export class HostDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {}
  @HostListener("mouseover") onMouseOver() {
    this.ChangeBgColor("RED");
  }
  ChangeBgColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, "color", color);
  }
}
