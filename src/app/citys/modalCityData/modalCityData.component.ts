import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";

import { City } from "../../shared/common";

@Component({
  selector: "app-modalCityData",
  templateUrl: "./modalCityData.component.html",
  styleUrls: ["../style.css"],
})
export class ModalCityDataComponent implements OnInit {
  title?: string;
  closeBtnName?: string;
  city: City;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}
}
