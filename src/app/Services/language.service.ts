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
export class LanguageService {

  private ControllerName = "Language/";
  private url: string 
  private header : Headers;
  constructor(public http: Http) {
    this.url=BaseURL.toString().concat(this.ControllerName);
    this.header = new Headers();
    this.header.append('Content-Type', 'application/json');
    this.header.append( 'Access-Control-Allow-Origin','*');
   }

    
    getCompanyByCompanyId(companyId: string)
    {
      return this.http.get(this.url.concat("GetCompanyById?companyId=",companyId))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    getyLanguageList()
    {
      return this.http.get(this.url.concat("getLanguagesData"))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    deleteLanguage(companyId: number)
    {
      return this.http.get(this.url.concat("deleteLanguages?languageId=",companyId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    copyLanguage(companyId: number)
    {
      return this.http.get(this.url.concat("copyLanguage?languageId=",companyId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    addLanguage(employeelist: EmployeeList)
    {
      return this.http.post(this.url.concat("addLanguage"), JSON.stringify(employeelist), {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    editLanguage(employeelist: EmployeeList)
    {
      return this.http.post(this.url.concat("editLanguage"), JSON.stringify(employeelist), {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    markUnpaid()
    {
      return this.http.post(this.url.concat("markCompaniesUnpaid"), "", {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }
    getLanguageById(languageId: number)
    {
      return this.http.get(this.url.concat("getLanguageById?languageId=",languageId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }
    
   private handleError(error: Response)
   {  
      return Observable.throw(new AuthenticationError(error.json()));
    
   }

}
