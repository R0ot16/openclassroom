import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  authStatus: boolean;

  @Input() appareilStatus: string;
  @Input() appareilName: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  appareilColor: string;

  constructor(private appareilService: AppareilService, private authService: AuthService) { }

  ngOnInit() {
    this.getStatus();
    this.authStatus = this.authService.isAuth;
  }

  public getStatus () {
    return this.appareilStatus;
  }

  public getColor() {
    if (this.appareilStatus === 'Eteind') {
      return 'red';
    } else if (this.appareilStatus === 'Allumé') {
      return 'green';
    }
  }

  turnOff() {
    setTimeout(() => {
        this.appareilService.switchOffOne(this.indexOfAppareil);
      }, 2500
    );
  }

  turnOn() {
    setTimeout( () => {
      this.appareilService.switchOnOne(this.indexOfAppareil);
    }, 2500);
  }
}
