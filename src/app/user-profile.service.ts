import { Injectable } from '@angular/core';
import { IUser } from './interfaces/iuser';
import { IUserProfile } from './interfaces/iuser-profile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  post(user: IUser): Observable<IUser>{
    return this.http.post<IUser>('https://reqres.in/api/registerUser', user); 
  }
}
