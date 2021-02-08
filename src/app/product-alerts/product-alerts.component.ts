import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: any;
  //@Input indicated that the property value passes in from the component's parent. HOW DO WE KNOW WHAT THE COMPONENT'S PARENT IS?!

  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
