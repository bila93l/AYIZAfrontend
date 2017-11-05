import { AuthenticationError } from './../../Models/AuthenticationError';
import { CountryService } from './../../Services/countries.service';
import { CurrencyService } from './../../Services/currency.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LanguageService } from './../../Services/language.service';
import { EmployeeList } from './../../Models/EmployeeList';
import { CountryList } from './../../Models/CountryList';
import { CompanyList } from './../../Models/CompanyList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  public currencyList : CompanyList[];
  public languageModel : CountryList;
  public languageList: EmployeeList[];
  
    constructor(private Service: LanguageService,
      public activeRoute: ActivatedRoute,
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
      });

      this.activeRoute.paramMap
      .subscribe(params =>{
        this.languageModel.CountryId = parseInt(params.get('countryId'));
        //console.log(this.languageModel.CurrencyId);
      });

      this.countryService.getCountryByiD((this.languageModel.CountryId))
      .subscribe(data => {
        this.languageModel = data;
      }, (error : AuthenticationError) => {
        console.log(error.error);
      });

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
