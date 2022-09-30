import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import CONFIG from "../config";
import { Observable } from "rxjs";

@Injectable()
export class CityService {
  constructor(public http: HttpClient) {}

  showRules() {
    let city = this.http.get(
      CONFIG.API + "q=cuernavaca" + "&appid=" + CONFIG.APIKEY
    );
    return city
    city.subscribe((dataCity) => {
      return dataCity;
    });
  }
}
