import { Injectable } from '@angular/core';
//import http method to api data hangle
import {HttpClient, HttpClientModule} from '@angular/common/http';
//The HttpClient service makes use of observables for all transactions. You must import the RxJS observable and operator symbols that appear in the example snippets. These ConfigService imports are typical.
import { Observable, throwError } from 'rxjs';
import { catchError, retry , map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export default class CrudOperationService {

  // class load time run this method
  constructor(private http: HttpClient) { }

  //for create new user 
  postUserCreate(newUserData : any){
    return this.http.post<any>("https://reqres.in/api/users", newUserData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  //for View the List of user details with pagenation
  getUsersList(pageId : number){
    return this.http.get<any>("https://reqres.in/api/users?page="+pageId)
    .pipe(map((res:any)=>{
      return res;
    }));
   
  }

  //for update user details
  updateUser(userId: number, data : any){
    return this.http.put<any>("https://reqres.in/api/users/",userId,data)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  //for delete user registration
  deleteUser(userId : number){
    return this.http.delete<any>("https://reqres.in/api/users/"+userId)
    .pipe(map((res:any)=>{
      return res;
    }));
  }


}
