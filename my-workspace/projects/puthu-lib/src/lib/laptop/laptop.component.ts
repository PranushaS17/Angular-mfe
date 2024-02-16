import { Component } from '@angular/core';

@Component({
  selector: 'lib-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
})
export class LaptopComponent {
  public laptops = [
    {
      name: 'Laptop 1',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Description of Laptop 1',
      price: '$1000',
    },
    {
      name: 'Laptop 2',
      image: 'https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Description of Laptop 2',
      price: '$1200',
    },
    {
      name: 'Laptop 3',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Description of Laptop 3',
      price: '$1500',
    },
  ];
}
