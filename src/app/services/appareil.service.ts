export class AppareilService {
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
        },
        {
            name: 'Garage',
            status: 'Eteind'
        }
      ];

      switchOnAll() {
          for (const appareil of this.appareils) {
            appareil.status = 'Allumé';
          }
      }

      switchOffAll() {
        for (const appareil of this.appareils) {
            appareil.status = 'Eteind';
          }
      }

      switchOnOne(index: number) {
          this.appareils[index].status = 'Allumé';
      }

      switchOffOne(index: number) {
          this.appareils[index].status = 'Eteind';
      }
}
