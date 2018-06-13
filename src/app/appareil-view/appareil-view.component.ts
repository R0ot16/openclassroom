import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  statusOne = 'Eteind';
  statusTwo = 'Allumé';
  statusThree = 'Allumé';

  appareils: any[];

  constructor(private appareilService: AppareilService) {

    setTimeout(() => {
         this.isAuth = true;
      }, 4000
    );

    setTimeout(() => {
      this.onAllume();
    }, 4000);
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllume() {
    this.appareilService.switchOnAll();
  }
  onEteind() {
    this.appareilService.switchOffAll();
  }
}
