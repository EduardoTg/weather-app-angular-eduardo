import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: "app-modalCityData",
  templateUrl: "./modalCityData.component.html",
  styleUrls: ["../style.css"]
})

export class ModalCityDataComponent implements OnInit {
  title?: string;
  closeBtnName?: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
