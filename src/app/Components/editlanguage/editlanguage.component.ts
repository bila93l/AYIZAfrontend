import { AuthenticationError } from './../../Models/AuthenticationError';
import { LanguageService } from './../../Services/language.service';
import { EmployeeList } from './../../Models/EmployeeList';

import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editlanguage',
  templateUrl: './editlanguage.component.html',
  styleUrls: ['./editlanguage.component.css']
})
export class EditlanguageComponent implements OnInit {

  public languageModel : EmployeeList;
  
  constructor(public Service: LanguageService,
    public activeRoute: ActivatedRoute,
    public router:  Router,
    ) { }
  
      ngOnInit() {
        this.languageModel = new EmployeeList();
        //this.companyModel.CompanyId = "8";
    
        this.activeRoute.paramMap
        .subscribe(params =>{
          this.languageModel.Id = parseInt(params.get('languageId'));
        });
    
        this.Service.getLanguageById((this.languageModel.Id))
        .subscribe(data => {
          this.languageModel = data;
        }, (error : AuthenticationError) => {
          console.log(error.error);
        });
      }
  
    addLanguage()
    {
  
      this.Service.editLanguage(this.languageModel)
      .subscribe(data => {
        
        //console.log('hello');
        this.router.navigate(['/language']);
      },
      (error: AuthenticationError)=>{
        console.log(error.error);
        
      });
      
      //console.log(btoa(this.loginModel.UserName));
    }

    navigateBack()
    {
      this.router.navigate(['/language']);
    }

}
