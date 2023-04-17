import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User {
  Id!: number
  Name!: string
  Username !: string;
  Email !: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  GetUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  GetUserById(id: number): Observable<User[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users/?id=" + id)
  }
}
