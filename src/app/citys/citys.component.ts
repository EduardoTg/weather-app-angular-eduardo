import { Component, OnInit } from "@angular/core";
import { CityService } from "../services/citys.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-citys",
  templateUrl: "./citys.component.html",
  styleUrls: ["./style.css"],
})
export class citysComponent implements OnInit {
  rules: any = [];
  form: any = {};
  fieldsList: any = [];
  validador: any = {};

  constructor(private cityService: CityService) {}
  // this.fieldsList[index].required = event.target.checked;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.form = {};
    this.rules = this.cityService.showRules();
    let y = this.rules.subscribe();
    console.log(y);
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
      if (result.value) this.fieldsList[index].rules.splice(indexRule, 1);
    });
  }

  save() {
    console.log(this.fieldsList);
  }
}
