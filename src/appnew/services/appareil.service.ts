import { Subject } from "rxjs";

export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'Eteind'
        },
        {
          id: 2,
          name: 'Télé',
          status: 'Allumé'
        },
        {
          id: 3,
          name: 'Radio',
          status: 'Allumé'
        },
        {
            id: 4,
            name: 'Garage',
            status: 'Eteind'
        }
      ];

      emitAppareilSubject() {
          this.appareilSubject.next(this.appareils.slice());
      }

      getStatutById(id: number) {
          return this.appareils[id].status;
      }

      getAppareilById(id: number) {
          const appareil = this.appareils.find(
              (appareilObject) => {
                  return appareilObject.id === id;
              }
          );
          return appareil;
      }

      switchOnAll() {
          for (const appareil of this.appareils) {
            appareil.status = 'Allumé';
          }
          this.emitAppareilSubject();
      }

      switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'Eteind';
          }
          this.emitAppareilSubject();
      }

      switchOnOne(index: number) {
          this.appareils[index].status = 'Allumé';
          this.emitAppareilSubject();
      }

      switchOffOne(index: number) {
          this.appareils[index].status = 'Eteind';
          this.emitAppareilSubject();
      }

      addAppareil(name: string, status: string) {
          const appareilObject = {
              id: 0,
              name: '',
              status: ''
          };
          appareilObject.name = name;
          appareilObject.status = status;
          appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
          this.appareils.push(appareilObject);
            this.emitAppareilSubject();
      }
}
