import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import {SpotifyServices} from '../../services/spotify.service';


@Component({
  selector: 'artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {
    id:string;
    artist: Artist[];
    albums: Album[];

    constructor(
        private _spotifyService: SpotifyServices,
        private _route:ActivatedRoute
        ){}
}
