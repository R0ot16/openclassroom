import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  authStatus: boolean;

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

  appareils: any[];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService, private authService: AuthService) {
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareilss: any[]) => {
        this.appareils = appareilss;
      }
    );
    this.appareilService.emitAppareilSubject();
    this.authStatus = this.authService.isAuth;
  }

  onAllume() {
    setTimeout( () => {
      this.appareilService.switchOnAll();
    }, 2650);
  }
  onEteind() {
    setTimeout( () => {
      this.appareilService.switchOffAll();
    }, 1500);
  }
}
