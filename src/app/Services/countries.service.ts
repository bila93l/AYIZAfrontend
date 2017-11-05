import { CountryList } from './../Models/CountryList';

import { CompanyList } from './../Models/CompanyList';
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
export class CountryService {

  private ControllerName = "Country/";
  private url: string 
  private header : Headers;
  constructor(public http: Http) {
    this.url=BaseURL.toString().concat(this.ControllerName);
    this.header = new Headers();
    this.header.append('Content-Type', 'application/json');
    this.header.append( 'Access-Control-Allow-Origin','*');
   }

    
    getCountryByCountryId(countryId: string)
    {
      return this.http.get(this.url.concat("getCountryById?countryId=",countryId))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    getCountryList()
    {
      return this.http.get(this.url.concat("getCountryData"))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    deleteCountry(countryId: number)
    {
      return this.http.get(this.url.concat("deleteCountry?languageId=",countryId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    copyCountry(countryId: number)
    {
      return this.http.get(this.url.concat("copyCountry?languageId=",countryId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    addCountry(countryList: CountryList)
    {
      return this.http.post(this.url.concat("addCountry"), JSON.stringify(countryList), {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    editCountry(countryList: CountryList)
    {
      return this.http.post(this.url.concat("editCountry"), JSON.stringify(countryList), {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    markUnpaid()
    {
      return this.http.post(this.url.concat("markCompaniesUnpaid"), "", {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }
    getCountryByiD(countryId: number)
    {
      return this.http.get(this.url.concat("getCountryById?countryId=",countryId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }
    
   private handleError(error: Response)
   {  
      return Observable.throw(new AuthenticationError(error.json()));
    
   }

}
