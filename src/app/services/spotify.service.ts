import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = `Bearer ${environment.token_spotify}`;
  constructor( private http: HttpClient) { }



  getQuery( query: string ){
    const url = `https://api.spotify.com/v1${ query }`;
    const headers = new HttpHeaders({
      'Authorization': this.token
    })

    return this.http.get( url, { headers })
  }

  getNewReleases(){
    return this.getQuery('/browse/new-releases')
    .pipe( map( data => data['albums'].items ))
  }

  searchArtist( termino: string ){
    return this.getQuery(`/search?q=${ termino }&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items ))
  }

  getArtist( id: string){
    return this.getQuery(`/artists/${ id }`)
  }
  
  getTopTracks( id: string){
    return this.getQuery(`/artists/${ id }/top-tracks?country=us`)
    .pipe( map( data => data["tracks"]))
  }
}
