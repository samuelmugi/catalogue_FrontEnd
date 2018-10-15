import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:9191/CATALOGUE/';
  payload = {};
  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    let product = {};
    product.prodName = customer.name;
    let cat = {};
    cat.catId = customer.age;
    product.catId = cat;
    this.payload.object = product;

    return this.http.post(`${this.baseUrl}` + `Products/create`, this.payload);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `Products/listAll`, this.payload);
  }
  getCategoryList(): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `Category/listAll`, this.payload);
  }

  getProductSearch(searchParams: String): Observable<any> {
    this.payload.searchParams = searchParams;
    return this.http.post(`${this.baseUrl}` + `Products/search`, this.payload);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  createCategory(category: Object): Observable<Object> {
    this.payload.object = category;
    return this.http.post(`${this.baseUrl}` + `Category/create`, this.payload);
  }


}
