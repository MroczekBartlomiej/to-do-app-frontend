import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let lists = [{
      id: 1,
      name: "First ListOfTask",
    },
      {
        id: 2,
        name: "Second ListOfTask",
      }];

    let tasks = [
      {
        id: 1,
        listId: 1,
        description: "One task desc"
      },
      {
        id: 1,
        listId: 1,
        description: "Two task desc"
      },
      {
        id: 2,
        listId: 1,
        description: "Three task desc"
      },
      {
        id: 2,
        listId: 1,
        description: "Four task desc"
      },
      {
        id: 5,
        listId: 2,
        description: "One task desc"
      },
      {
        id: 6,
        listId: 2,
        description: "Two task desc"
      },
      {
        id: 7,
        listId: 2,
        description: "Three task desc"
      },
      {
        id: 8,
        listId: 2,
        description: "Four task desc"
      }
    ]
    return {lists, tasks};
  }
}
