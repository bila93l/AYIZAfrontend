import { EmployeeList } from './../../Models/EmployeeList';
import { AuthenticationError } from './../../Models/AuthenticationError';
import { CurrencyService } from './../../Services/currency.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LanguageService } from './../../Services/language.service';
import { CompanyList } from './../../Models/CompanyList';
import { Component, OnInit, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.css']
})
export class AddCurrencyComponent implements OnInit {

  public languageModel : CompanyList;
  public languageList: EmployeeList[];
  
    constructor(private Service: LanguageService,
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
