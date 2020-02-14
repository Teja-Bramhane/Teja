import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", redirectTo: "/AppComponent", pathMatch: "full" }
];

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styles: []
})
export class BookComponent {
  books = [
    {
      Name: "Harry Potter",
      Author: "J.K.Rowling",
      bookColor: "RED",
      Price: 250
    },
    {
      Name: "Harry Potter2",
      Author: "J.K.Rowling",
      bookColor: "YELLOW",
      Price: 570
    },
    {
      Name: "Harry Potter3",
      Author: "J.K.Rowling",
      bookColor: "black",
      Price: 650
    }
  ];
}
