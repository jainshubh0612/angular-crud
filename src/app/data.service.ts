import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  public getUser(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public addUser(user){
    return this.httpClient.post(this.REST_API_SERVER , JSON.stringify(user))
  }  
}
