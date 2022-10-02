import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import Swal from "sweetalert2";
import { ModalCityDataComponent } from "./modalCityData/modalCityData.component";
import { City } from "../shared/common";

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
   
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {

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
