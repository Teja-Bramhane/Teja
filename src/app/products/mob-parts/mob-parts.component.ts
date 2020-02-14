import { MOBPARTS } from "./mock";
import { Component } from "@angular/core";
import { MobParts } from "./mob-parts";
@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styleUrls: ["./mob-parts.component.css"]
})
export class MobPartsComponent {
  mobParts: MobParts[] = MOBPARTS;
  constructor() {
    console.log("Constructor Block...!");
  }

  ngOnInit() {
    console.log("ngOnInit Block...!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy Block...!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Block...!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Block...!");
  }
}
