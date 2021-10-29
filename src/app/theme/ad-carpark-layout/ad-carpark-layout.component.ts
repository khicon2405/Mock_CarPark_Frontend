import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/_models/car.model';

@Component({
  selector: 'app-ad-carpark-layout',
  templateUrl: './ad-carpark-layout.component.html',
  styleUrls: ['./ad-carpark-layout.component.css'],
})
export class AdCarparkLayoutComponent implements OnInit {
  hidden: boolean = true;
  listItem = [
    {
      name: 'Car Manager',
      hidden: false,
      icon: 'directions_car',
      childItem: [
        {
          childName: 'Car List',
          icon: 'list',
          routerLink: '/admin-car-park/car/all-car',
        },
        {
          childName: 'Add New Car',
          icon: 'add_box',
          routerLink: '/admin-car-park/car/add-new-car',
        },
      ],
    },
    {
      name: 'Booking Office Manager',
      hidden: true,
      icon: 'local_mall',
      childItem: [
        {
          childName: 'Booking List',
          icon: 'list',
          routerLink: '/admin-car-park/booking-office/all-booking',
        },
        {
          childName: 'Add New Booking',
          icon: 'add_box',
          routerLink: '/admin-car-park/booking-office/add-new-booking',
        },
      ],
    },
    {
      name: 'Parking Lot Manager',
      hidden: true,
      icon: 'pin_drop',
      childItem: [
        {
          childName: 'Parking Lot List',
          icon: 'list',
          routerLink: '/admin-car-park/parking-lot/all-parking-lot',
        },
        {
          childName: 'Add New PArking Lot',
          icon: 'add_box',
          routerLink: '/admin-car-park/parking-lot/add-new-parking-lot',
        },
      ],
    },
    {
      name: 'Ticket Manager',
      hidden: true,
      icon: 'credit_card',
      childItem: [
        {
          childName: 'Ticket List',
          icon: 'list',
          routerLink: '/admin-car-park/ticket/all-ticket',
        },
        {
          childName: 'Add New Ticket',
          icon: 'add_box',
          routerLink: '/admin-car-park/ticket/add-new-ticket',
        },
      ],
    },
    {
      name: 'Trip Manager',
      hidden: true,
      icon: 'departure_board',
      childItem: [
        {
          childName: 'Trip List',
          icon: 'list',
          routerLink: '/admin-car-park/trip/all-trip',
        },
        {
          childName: 'Add New Trip',
          icon: 'add_box',
          routerLink: '/admin-car-park/trip/add-new-trip',
        },
      ],
    },
  ];
  
  constructor() {}

  ngOnInit(): void {}
  
  onSelectedItem(i: number) {
    this.listItem[i].hidden = !this.listItem[i].hidden;
  }
}
