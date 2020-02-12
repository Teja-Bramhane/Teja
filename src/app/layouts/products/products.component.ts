import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent {
  title = "Angular....!!!";
  dummyArr = ["Mumbai", "Pune", "Chennai"];
  mobParts = [
    {
      name: "Card",
      t1: 5,
      prodColor: "red",
      onlineStatus: true,
      country: "India",
      isOnline: true
    },
    {
      name: "Card1",
      t1: 0,
      prodColor: "green",
      country: "Australia",
      isOnline: false
    },
    {
      name: "Card2",
      t1: 2,
      prodColor: "blue",
      country: "Germany",
      isOnline: true
    }
  ];
}
