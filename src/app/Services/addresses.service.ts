import { AddressList } from './../Models/AddressList';
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
export class AddressesService {

  private ControllerName = "Address/";
  private url: string 
  private header : Headers;
  constructor(public http: Http) {
    this.url=BaseURL.toString().concat(this.ControllerName);
    this.header = new Headers();
    this.header.append('Content-Type', 'application/json');
    this.header.append( 'Access-Control-Allow-Origin','*');
   }

    
    getAddressByAddressId(addressId: string)
    {
      return this.http.get(this.url.concat("getAddressById?languageId=",addressId))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    getAddressList()
    {
      return this.http.get(this.url.concat("getAddressData"))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    deleteAddress(addressId: number)
    {
      return this.http.get(this.url.concat("deleteAddress?languageId=",addressId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    copyAddress(addressId: number)
    {
      return this.http.get(this.url.concat("copyAddress?languageId=",addressId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    addAddress(addressList: AddressList)
    {
      return this.http.post(this.url.concat("addAddress"), JSON.stringify(addressList), {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    editAddress(addressList: AddressList)
    {
      return this.http.post(this.url.concat("editAddress"), JSON.stringify(addressList), {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }

    markUnpaid()
    {
      return this.http.post(this.url.concat("markCompaniesUnpaid"), "", {headers: this.header})
      .map(Response => Response.json())
      .catch(this.handleError);
    }
    getAddressById(addressId: number)
    {
      return this.http.get(this.url.concat("getAddressById?languageId=",addressId.toString()))
      .map(Response => Response.json())
      .catch(this.handleError);
    }
    
   private handleError(error: Response)
   {  
      return Observable.throw(new AuthenticationError(error.json()));
    
   }

}
