import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  searchParams: String;
  products$: {};

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.age = 0;
  }

  private searchCustomers() {
    this.dataService.getProductSearch(this.searchParams)
      .subscribe(  data => {
        this.products$ = data.payload.content;
        console.log(this.products$);

      });
  }

  onSubmit() {
    this.searchCustomers();
  }
}
