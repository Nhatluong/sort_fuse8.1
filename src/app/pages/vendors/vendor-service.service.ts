import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  constructor(private http: HttpClient) { }

    getVendors() {
        let url = 'http://127.0.0.1:8000/get_vendors';
        return this.http.get(url);
    }

}

