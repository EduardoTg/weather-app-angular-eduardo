import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import Swal from "sweetalert2";

import { CityService } from "../services/citys.service";
import { City } from "../shared/common";

@Component({
  selector: "app-citys",
  templateUrl: "./citys.component.html",
  styleUrls: ["./style.css"],
  providers: [CityService],
})
export class CitysComponent implements OnInit {
  citys: City;
  form: any = {};
  fieldsList: any = [];
  validador: any = {};
  bsModalRef?: BsModalRef;

  constructor(
    private cityService: CityService,
    private modalService: BsModalService
  ) {}

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
    console.log(123);
    const initialState: ModalOptions = {
      initialState: {
        list: [
          "Open a modal with component",
          "Pass your data",
          "Do something else",
          "...",
        ],
        title: "Modal with component",
      },
    };
    this.bsModalRef = this.modalService.show(
      ModalContentComponent,
      initialState
    );
    this.bsModalRef.content.closeBtnName = "Close";
  }
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="btn-close close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true" class="visually-hidden">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
    </div>
  `
})

export class ModalContentComponent implements OnInit {
  title?: string;
  closeBtnName?: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
