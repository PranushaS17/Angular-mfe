import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent {
  public mobiles = [
    {
      name: 'Mobile 1',
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Description of Mobile 1',
      price: '$1000',
    },
    {
      name: 'Mobile 2',
      image:
        'https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Description of Mobile 2',
      price: '$1200',
    },
    {
      name: 'Mobile 3',
      image:
        'https://images.pexels.com/photos/248526/pexels-photo-248526.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Description of Mobile 3',
      price: '$1500',
    },
  ];
}
