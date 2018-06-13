import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilStatus: string;
  @Input() appareilName: string;
  appareilColor: string;

  constructor() { }

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
}
