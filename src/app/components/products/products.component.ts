import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: {
    name: string, 
    category: string, 
    image: string,
    quantity: number,
    price: number
  }[] = [
    {
      name: "Domates",
      category: "Sebze",
      image: "https://adrossen.com/wp-content/uploads/2022/12/adrossen-katalog-fotolar_raptor-scaled.jpg",
      quantity: 100,
      price: 100000
    },
    {
      name: "Elma",
      category: "Meyve",
      image: "https://adrossen.com/wp-content/uploads/2022/12/adrossen-katalog-fotolar_raptor-scaled.jpg",
      quantity: 200,
      price: 200000
    },
    {
      name: "Armut",
      category: "meyve",
      image: "https://adrossen.com/wp-content/uploads/2022/12/adrossen-katalog-fotolar_raptor-scaled.jpg",
      quantity: 300,
      price: 300000.15
    },
    {
      name: "Üzüm",
      category: "Meyve",
      image: "https://adrossen.com/wp-content/uploads/2022/12/adrossen-katalog-fotolar_raptor-scaled.jpg",
      quantity: 400,
      price: 4046000
    },
    {
      name: "Karpuz",
      category: "Meyve",
      image: "https://adrossen.com/wp-content/uploads/2022/12/adrossen-katalog-fotolar_raptor-scaled.jpg",
      quantity: 500,
      price: 5000.01
    },
  ]

  search: string = "";


  searchProducts(){
    //return this.products.filter(p=> p.name.includes(this.search));
    return this.products.filter(p=> 
      p.name.includes(this.search) ||
      p.category.includes(this.search) ||
      p.quantity.toString() == this.search);
  }
}
