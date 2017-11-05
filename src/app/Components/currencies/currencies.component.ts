import { CurrencyService } from './../../Services/currency.service';
import { CompanyList } from './../../Models/CompanyList';
import { EmployeeList } from './../../Models/EmployeeList';
import { AuthenticationError } from './../../Models/AuthenticationError';
import { LanguageService } from './../../Services/language.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Rx";
import { Router } from '@angular/router';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<DataTables.Settings> = new Subject<DataTables.Settings>();
  employeeList: CompanyList[]=[];
  constructor(public currencyService: CurrencyService,
    public router:  Router) { 

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.currencyService.getCurrencyList()
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
    this.router.navigate(["/viewCurrency", Id]); 
  }

  copy(Id: number)
  {
    if(confirm("Do you want to copy this currency?"))
    {
      this.currencyService.copyCurrency(Id)
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
    this.router.navigate(["/editCurrency", Id]); 
  }

  add()
  {
    this.router.navigate(["/addCurrency"]); 
  }

  delete(Id: number)
  {
    if(confirm("Do you want to delete this currency?"))
    {
      this.currencyService.deleteCurrency(Id)
      .subscribe(data => {
        location.reload();
      },
      (error: AuthenticationError)=>{
        console.log(error.error);  
      })
    }
  }

}
