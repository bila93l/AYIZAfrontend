import { CountryList } from './../../Models/CountryList';
import { EmployeeList } from './../../Models/EmployeeList';
import { CompanyList } from './../../Models/CompanyList';
import { CountryService } from './../../Services/countries.service';
import { Router } from '@angular/router';
import { LanguageService } from './../../Services/language.service';
import { CurrencyService } from './../../Services/currency.service';
import { AuthenticationError } from './../../Models/AuthenticationError';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  public currencyList : CompanyList[];
  public languageModel : CountryList;
  public languageList: EmployeeList[];
  
    constructor(private Service: LanguageService,
      public router:  Router, public currencyService: CurrencyService,
      public countryService: CountryService
      ) { }
  
    ngOnInit() {
      this.languageModel = new CountryList();
      this.Service.getyLanguageList()
      .subscribe((Response) => {
        this.languageList=Response;
        if(this.languageList.length > 0)
        {
          this.languageModel.LanguageId=this.languageList[0].Id;
        }
        
      },(error: AuthenticationError)=>{
        console.log(error.error);
      });

      this.currencyService.getCurrencyList()
      .subscribe((Response) => {
        this.currencyList=Response;
        if(this.currencyList.length > 0)
        {
          this.languageModel.CurrencyId=this.currencyList[0].CurrencyId;
        }
        
      },(error: AuthenticationError)=>{
        console.log(error.error);
      })
    }
  
    addCountry()
    {
  
      this.countryService.addCountry(this.languageModel)
      .subscribe(data => {
        
        //console.log('hello');
        this.router.navigate(['/country']);
      },
      (error: AuthenticationError)=>{
        console.log(error.error);
        
      });
      
      //console.log(btoa(this.loginModel.UserName));
    }
    navigateBack()
    {
      this.router.navigate(['/country']);
    }

}
