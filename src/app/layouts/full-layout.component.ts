import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

import { CityService } from "../services/citys.service";
import { City } from "../shared/common";

@Component({
  selector: "app-dashboard",
  templateUrl: "./full-layout.component.html",
  providers: [CityService],
})
export class FullLayoutComponent implements OnInit {
  public disabled: boolean = false;
  myForm: FormGroup;
  citys: City;

  constructor(
    private router: Router,
    private cityService: CityService,
    private fb: FormBuilder
  ) {}

  public status: { isopen: boolean } = { isopen: false };

  public toggled(open: boolean): void {
    console.log("Dropdown is now: ", open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      city: ["", Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    console.log(13);

    this.cityService.getCitys(form.value.city).subscribe(
      (citysResponse) => {
        this.citys = citysResponse;
      },
      (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "City not found",
        });
      }
    );
  }
}
