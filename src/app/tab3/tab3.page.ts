import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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

  unEvent = {
    'id' : 3
  }

  constructor() {}

}
