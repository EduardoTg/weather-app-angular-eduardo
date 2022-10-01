import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";

import { CitysComponent, ModalContentComponent } from "./citys.component";

@NgModule({
  declarations: [CitysComponent, ModalContentComponent],
  imports: [CommonModule, FormsModule, ModalModule.forRoot()],
  entryComponents: [ModalContentComponent],
  bootstrap: [CitysComponent]
})
export class CitysModule {}
