import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  headers : string[];
  products: any[];

  constructor(private _products:ProductService) { 
    this.headers = ["Name","Price","Action"];
    this.products = _products.products;
  }

  ngOnInit(): void {
  }

}
