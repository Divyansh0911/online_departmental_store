import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Laptop', price: 1200, description: 'A high performance laptop' },
    { id: 2, name: 'Smartphone', price: 700, description: 'A latest generation smartphone' },
    { id: 3, name: 'Headphones', price: 150, description: 'Noise-cancelling headphones' }
  ];

  addToCart(product: any) {
    alert(`${product.name} added to cart!`);
  }
}
