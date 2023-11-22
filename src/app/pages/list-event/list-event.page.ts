import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.page.html',
  styleUrls: ['./list-event.page.scss'],
})
export class ListEventPage implements OnInit {

  EventList = [
    {
      'id' : 1,
      'libelle' : 'Mobile app training with Ionic',
      'date' : "du 20 - 24 nov 2023",
      'place' : 'ODC Bobo Club'
    },
    {
      'id' : 2,
      'libelle' : 'Destok app training with Ionic',
      'date' : "du 20 - 24 nov 2023",
      'place' : 'ODC Bobo Club',
    },
    {
      'id' : 3,
      'libelle' : 'Mobile app training with Ionic',
      'date' : "du 20 - 24 nov 2023",
      'place' : 'ODC Bobo Club',
    },
    {
      'id' : 4,
      'libelle' : 'Mobile app training with Ionic',
      'date' : "du 20 - 24 nov 2023",
      'place' : 'ODC Bobo Club',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
