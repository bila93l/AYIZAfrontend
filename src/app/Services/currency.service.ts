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
export class CurrencyService {

  private ControllerName = "Currency/";
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

    getCurrencyList()
    {
      return this.http.get(this.url.concat("getCurrencyData"))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    deleteCurrency(currencyId: number)
    {
      return this.http.get(this.url.concat("deleteCurrency?languageId=",currencyId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    copyCurrency(currencyId: number)
    {
      return this.http.get(this.url.concat("copyCurrency?languageId=",currencyId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    addCurrency(currencyList: CompanyList)
    {
      return this.http.post(this.url.concat("addCurrency"), JSON.stringify(currencyList), {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    editCurrency(currencyList: CompanyList)
    {
      return this.http.post(this.url.concat("editCurrency"), JSON.stringify(currencyList), {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    markUnpaid()
    {
      return this.http.post(this.url.concat("markCompaniesUnpaid"), "", {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }
    getCurrencyByiD(currencyId: number)
    {
      return this.http.get(this.url.concat("getCurrencyById?languageId=",currencyId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }
    
   private handleError(error: Response)
   {  
      return Observable.throw(new AuthenticationError(error.json()));
    
   }

}
