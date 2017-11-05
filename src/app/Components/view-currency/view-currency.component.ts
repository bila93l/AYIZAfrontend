import { Router, ActivatedRoute } from '@angular/router';
import { CurrencyService } from './../../Services/currency.service';
import { LanguageService } from './../../Services/language.service';
import { EmployeeList } from './../../Models/EmployeeList';
import { CompanyList } from './../../Models/CompanyList';
import { AuthenticationError } from './../../Models/AuthenticationError';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-currency',
  templateUrl: './view-currency.component.html',
  styleUrls: ['./view-currency.component.css']
})
export class ViewCurrencyComponent implements OnInit {

  public languageModel : CompanyList;
  public languageList: EmployeeList[];
  
    constructor(public Service: LanguageService,
      public activeRoute: ActivatedRoute,
      public router:  Router, public currencyService: CurrencyService
      ) { }
  
    ngOnInit() {
      this.languageModel = new CompanyList();
      this.Service.getyLanguageList()
      .subscribe((Response) => {
        this.languageList=Response;
        if(this.languageList.length > 0)
        {
          this.languageModel.LanguageId=this.languageList[0].Id;
        }
        
      },(error: AuthenticationError)=>{
        console.log(error.error);
      })

      this.activeRoute.paramMap
      .subscribe(params =>{
        this.languageModel.CurrencyId = parseInt(params.get('currencyId'));
      });
  
      this.currencyService.getCurrencyByiD((this.languageModel.CurrencyId))
      .subscribe(data => {
        this.languageModel = data;
      }, (error : AuthenticationError) => {
        console.log(error.error);
      });

    }
  
    addCurrency()
    {
  
      this.currencyService.addCurrency(this.languageModel)
      .subscribe(data => {
        
        //console.log('hello');
        this.router.navigate(['/currency']);
      },
      (error: AuthenticationError)=>{
        console.log(error.error);
        
      });
      
      //console.log(btoa(this.loginModel.UserName));
    }
    navigateBack()
    {
      this.router.navigate(['/currency']);
    }

}
