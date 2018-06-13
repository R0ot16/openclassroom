import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilStatus: string;
  @Input() appareilName: string;
  @Input() indexOfAppareil: number;

  appareilColor: string;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    this.getStatus();
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
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

  turnOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
}
