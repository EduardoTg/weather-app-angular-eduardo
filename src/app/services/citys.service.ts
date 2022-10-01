import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import CONFIG from "../config";
import { Observable } from "rxjs";
import { City } from "../shared/common";

@Injectable()
export class CityService {
  constructor(public http: HttpClient) {}

  getCitys(): Observable<City> {
    return this.http.get<City>(
      CONFIG.API + "q=cuernavaca" + "&appid=" + CONFIG.APIKEY
    );
  }
}
