import { AddressesService } from './../../Services/addresses.service';
import { AddressList } from './../../Models/AddressList';
import { CurrencyService } from './../../Services/currency.service';
import { CompanyList } from './../../Models/CompanyList';
import { EmployeeList } from './../../Models/EmployeeList';
import { AuthenticationError } from './../../Models/AuthenticationError';
import { LanguageService } from './../../Services/language.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Rx";
import { Router } from '@angular/router';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<DataTables.Settings> = new Subject<DataTables.Settings>();
  employeeList: AddressList[]=[];
  constructor(public service: AddressesService,
    public router:  Router) { 

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.service.getAddressList()
    .subscribe(data => {
      this.employeeList=data;
      this.dtTrigger.next();
    },
    (error: AuthenticationError)=>{
      console.log(error.error);  
    });
  }

  view(Id: number)
  {
    this.router.navigate(["/viewAddress", Id]); 
  }

  copy(Id: number)
  {
    if(confirm("Do you want to copy this address?"))
    {
      this.service.copyAddress(Id)
      .subscribe(data => {
        location.reload();
      },
      (error: AuthenticationError)=>{
        console.log(error.error);  
      })
    }
  }

  edit(Id: number)
  {
    this.router.navigate(["/editAddress", Id]); 
  }

  add()
  {
    this.router.navigate(["/addAddress"]); 
  }

  delete(Id: number)
  {
    if(confirm("Do you want to delete this address?"))
    {
      this.service.deleteAddress(Id)
      .subscribe(data => {
        location.reload();
      },
      (error: AuthenticationError)=>{
        console.log(error.error);  
      })
    }
  }

}
