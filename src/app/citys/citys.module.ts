import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";

import { CitysComponent } from "./citys.component";

import { ModalCityDataComponent } from "./modalCityData/modalCityData.component";

@NgModule({
  declarations: [CitysComponent, ModalCityDataComponent],
  imports: [CommonModule, FormsModule, ModalModule.forRoot()],
  entryComponents: [ModalCityDataComponent],
  bootstrap: [CitysComponent],
})
export class CitysModule {}
