import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const heroes = [
        { id: 1, name: 'SuperMan'},
        { id: 2, name: 'SpiderMan'},
        { id: 3, name: 'BatMan'},
        { id: 4, name: 'Hulk'},
        { id: 5, name: 'IronMan'},
        { id: 6, name: 'Joker'},
        { id: 7, name: 'Transformer'},
        { id: 8, name: 'Flash'},
        { id: 9, name: 'Avengers'},
        { id: 10, name: 'Shaktiman'}
      ];
      return {heroes};
    }
  }