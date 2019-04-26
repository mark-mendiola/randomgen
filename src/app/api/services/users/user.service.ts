import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './objects/user';
import { Gender } from './objects/gender';
import { Nationality } from './objects/nationality';

const httpOptions = {
  headers : new HttpHeaders( { 'Content-type' : 'application/json' } )
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private _http : HttpClient
  ) { }

  getUsers( options : any ) : Observable<User[]> {
    var limit = options.limit;
    var gender = options.gender;
    var nat = options.nationality;
    var seed = options.seed;
    var query = '';
    
    if ( ! limit || limit > 12 ) {
      limit = 12;
    }
    query += 'results=' + limit;

    if ( gender ) {
      query += '&gender=' + gender;
    }

    if ( nat ) {
      query += '&nat=' + nat;
    }

    if ( seed ) {
      seed += '&seed=' + seed;
    }

    return this._http.get<User[]>( `https://randomuser.me/api/?${query}` ).pipe()
  }

}
