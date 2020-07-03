import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private APIKey: string = environment.APIKey;
  // Giphy allows for content rating - see https://developers.giphy.com/docs/optional-settings/#language-support
  private contentRating: string = 'G';
  private url: string = `https://api.giphy.com/v1/gifs/search?api_key=${this.APIKey}&rating=${this.contentRating}&q=`;

  constructor(private http: HttpClient) {}

  get(query: string): Observable<Object> {
    return this.http.get(`${this.url}${query}`, { responseType: 'json' }).pipe(
      map((res) => res['data']),
      map((data) => Object.values(data))
    );
  }

  private handleError(e: HttpErrorResponse) {
    console.log('ERROR: ', e);
  }
}
