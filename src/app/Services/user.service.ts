import { UsersList } from './../Models/UsersList';
import { EmployeeList } from './../Models/EmployeeList';
import { AuthenticationError } from './../Models/AuthenticationError';
import { BaseURL } from './../Constants/ServiceConstant';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private ControllerName = "Users/";
  private url: string 
  private header : Headers;
  constructor(public http: Http) {
    this.url=BaseURL.toString().concat(this.ControllerName);
    this.header = new Headers();
    this.header.append('Content-Type', 'application/json');
    this.header.append( 'Access-Control-Allow-Origin','*');
   }

    
    getUserByUserId(userId: string)
    {
      return this.http.get(this.url.concat("getUserById?languageId=",userId))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    getUserList()
    {
      return this.http.get(this.url.concat("geUserData"))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    deleteUser(userId: number)
    {
      return this.http.get(this.url.concat("deleteUser?languageId=",userId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    copyUser(userId: number)
    {
      return this.http.get(this.url.concat("copyUser?languageId=",userId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    addUser(employeelist: UsersList)
    {
      return this.http.post(this.url.concat("addUser"), JSON.stringify(employeelist), {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    editUser(employeelist: UsersList)
    {
      return this.http.post(this.url.concat("editUser"), JSON.stringify(employeelist), {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    markUnpaid()
    {
      return this.http.post(this.url.concat("markCompaniesUnpaid"), "", {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }
    getUserById(userId: number)
    {
      return this.http.get(this.url.concat("getUserById?languageId=",userId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    getUserTypes()
    {
      return this.http.get(this.url.concat("getUserTypes"))
      .map(Response => Response.json())
      .catch(this.handleError);
    }
    
   private handleError(error: Response)
   {  
      return Observable.throw(new AuthenticationError(error.json()));
    
   }

}
