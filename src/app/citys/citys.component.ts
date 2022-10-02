import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";

import { City } from "../shared/common";
import { ModalCityDataComponent } from "./modalCityData/modalCityData.component";

import { FullLayoutComponent } from "../../app/layouts/full-layout.component";

@Component({
  selector: "app-citys",
  templateUrl: "./citys.component.html",
  styleUrls: ["./style.css"],
})
export class CitysComponent implements OnInit {
  citys: City;
  fieldsList: any = [];
  validador: any = {};
  bsModalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private fullLayoutComponent: FullLayoutComponent
  ) {}

  ngOnInit() {
    this.fullLayoutComponent.sendCityObs.subscribe((response) => {
      this.citys = response;
      console.log(234);
      
    });
  }

  showModal() {
    const initialState: ModalOptions = {
      initialState: {
        city: this.citys,
        title: "Weather of the day.",
      },
    };
    this.bsModalRef = this.modalService.show(
      ModalCityDataComponent,
      initialState
    );
    this.bsModalRef.content.closeBtnName = "Close";
  }
}
