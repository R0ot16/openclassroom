import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { delay } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes = 0;
  counter: Subscription;

  ngOnInit() {
    this.counter = interval(1000).subscribe( () => this.secondes++ );
   }

   ngOnDestroy() {
     this.counter.unsubscribe();
   }
}
