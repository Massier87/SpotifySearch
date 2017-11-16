import { Component } from '@angular/core';
import {SpotifyServices} from '../../services/spotify.service';

import {Artist} from '../../../Artist';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  
  searchStr:string;
  searchRes: Artist;

  constructor(private _spotifyServices:SpotifyServices) {
   
  }

  searchMusic(){
      /*
      this._spotifyServices.searchMusic(this.searchStr).subscribe(res => {
          console.log(res);
          this.searchRes = res.artists.item;
      });
      */
      /* this._spotifyServices.getArtist(this.searchStr).subscribe(res => {
          console.log(res);
          //this.searchRes = res.artists.item;          
      }); */

      this._spotifyServices.getArtist(this.searchStr)
        .map(res => res)
  }

}
