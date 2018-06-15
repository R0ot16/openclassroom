import { Component } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  posts = [
    {
      title: 'Super !',
      content: 'Super blog, c\'est vraiment très chouette !',
      loveIts: 12,
      created_at: new Promise(
        (resolve, reject) => {
           const date = new Date();
           setTimeout(
            () => {
              resolve(date);
            }, 2000
           );
        }
      ),
      author: 'James'
    },
    {
      title: 'Archi nul...',
      content: 'J\'aime pas du tout, c\'est moche',
      loveIts: -5,
      created_at: new Promise(
        (resolve, reject) => {
           const date = new Date();
           setTimeout(
            () => {
              resolve(date);
            }, 2000
           );
        }
      ),
      author: 'Mike'
    },
    {
      title: 'Pas mal',
      content: 'Bien pensé, super boulot, bien joué.',
      loveIts: 7,
      created_at: new Promise(
        (resolve, reject) => {
           const date = new Date();
           setTimeout(
            () => {
              resolve(date);
            }, 2000
           );
        }
      ),
      author: 'Lucie'
    }
  ];

  appareils = [
    {
      name: 'Machine à laver',
      status: 'Eteind'
    },
    {
      name: 'Télé',
      status: 'Allumé'
    },
    {
      name: 'Radio',
      status: 'Allumé'
    }
  ];

  statusOne = 'Eteind';
  statusTwo = 'Allumé';
  statusThree = 'Allumé';

  constructor() {

    setTimeout(() => {
         this.isAuth = true;
      }, 4000
    );

    setTimeout(() => {
      this.onAllume();
    }, 4000);
  }

  onAllume() {
    for (let i = 0; i < 3; i++) {
      if (this.appareils[i].status === 'Allumé') {
        this.appareils[i].status = 'Eteind';
      } else {
        this.appareils[i].status = 'Allumé';
      }
    }

  }
}
