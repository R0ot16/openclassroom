import { Component } from '@angular/core';
import { resolve, reject } from 'q';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'Mike';

  constructor() { }
}
