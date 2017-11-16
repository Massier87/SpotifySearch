import { InMemoryDbService } from 'angular-in-memory-web-api';

/*
export class Artist {
    id: number;
    name:string;
    genres:any;
    albums:Album[];
}
 */

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const artist = [
      { id: 11, name: 'AroSmith', genres: 'rock', albums: '0001' },
      { id: 12, name: 'AEminam', genres: 'rap', albums: '0002' },
      { id: 13, name: 'ABombasto', genres: 'rap', albums: '0003'  }
    ];
    return {artist};
  }
}