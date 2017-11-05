import { CountryService } from './../../Services/countries.service';
import { CountryList } from './../../Models/CountryList';
import { CurrencyService } from './../../Services/currency.service';
import { CompanyList } from './../../Models/CompanyList';
import { EmployeeList } from './../../Models/EmployeeList';
import { AuthenticationError } from './../../Models/AuthenticationError';
import { LanguageService } from './../../Services/language.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Rx";
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<DataTables.Settings> = new Subject<DataTables.Settings>();
  employeeList: CountryList[]=[];
  constructor(public service: CountryService,
    public router:  Router) { 

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.service.getCountryList()
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
    this.router.navigate(["/viewCountry", Id]); 
  }

  copy(Id: number)
  {
    if(confirm("Do you want to copy this country?"))
    {
      this.service.copyCountry(Id)
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
    this.router.navigate(["/editCountry", Id]); 
  }

  add()
  {
    this.router.navigate(["/addCountry"]); 
  }

  delete(Id: number)
  {
    if(confirm("Do you want to delete this country?"))
    {
      this.service.deleteCountry(Id)
      .subscribe(data => {
        location.reload();
      },
      (error: AuthenticationError)=>{
        console.log(error.error);  
      })
    }
  }

}
