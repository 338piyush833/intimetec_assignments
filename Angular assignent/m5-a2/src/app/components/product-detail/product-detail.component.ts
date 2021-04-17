import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id : number;
  product : any;
  constructor(private route: ActivatedRoute, private _productService: ProductService) {
    this.id = 0;
    
  }

  ngOnInit() {
    if (this.route) {
      this.route.queryParams.subscribe(params => {
        if (params) {
          const { id } = params;
          console.log("This is the category: ", id);
          this.id = id;
          this.product = this._productService.getProduct(id);
          console.log(this.product);
        }
      })
    }
  }

}
