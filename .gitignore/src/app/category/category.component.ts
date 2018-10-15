import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  submitted = false;
  category = {};
  public categorydata$ = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.reloadCategory();
  }

  newCategory(): void {
    this.submitted = false;
    this.category = {};
  }

  saveCategory() {
    this.customerService.createCategory(this.category)
      .subscribe(data => console.log(data), error => console.log(error));
    this.category = {};
    this.reloadCategory();
  }

  onSubmit() {
    this.submitted = true;
    this.saveCategory();
  }

  reloadCategory() {
    this.customerService.getCategoryList().subscribe(
      data => {
        this.categorydata$ = data.payload;
        console.log(this.categorydata$);

      }
    );

  }
}
