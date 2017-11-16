import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import { Artist } from '../../Artist';

@Injectable()
export class SpotifyServices{

    private searchUrl:string;
    private artistUrl:string;

    constructor(private _http:Http){
        
    }

    searchMusic(str:string, type='artist'){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        // TODO: mock the data
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }

    getArtist(id:string){
        this.artistUrl = 'https://api.spotify.com/v1/artists'+id;
        // TODO: mock the data
        //return this._http.get(this.artistUrl)
        //    .map(res => res.json());
        return Observable.of(
            {id: 11, name: 'AroSmith', genres: 'rock', albums: '0001'},
            { id: 12, name: 'AEminam', genres: 'rap', albums: '0002' },
            { id: 13, name: 'ABombasto', genres: 'rap', albums: '0003'  }
            );
    }
}