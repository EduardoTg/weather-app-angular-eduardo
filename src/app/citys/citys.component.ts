import { Component, OnInit } from "@angular/core";
import { CityService } from "../services/citys.service";
import { City } from "../shared/common";
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import Swal from "sweetalert2";

@Component({
  selector: "app-citys",
  templateUrl: "./citys.component.html",
  styleUrls: ["./style.css"],
})
export class citysComponent implements OnInit {
  citys: City ;
  form: any = {};
  fieldsList: any = [];
  validador: any = {};

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.form = {};
    this.cityService
      .getCitys()
      .subscribe((citysResponse) => (this.citys = citysResponse));
  }

  deleteArgument(index: number, indexRule: number) {
    Swal.fire({
      title: "",
      text: "Are you sure delete argument?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.value) this.fieldsList[index].citys.splice(indexRule, 1);
    });
  }

  showModal() {
    console.log(this.fieldsList);
  }
}
