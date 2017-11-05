import { AuthenticationError } from './../../Models/AuthenticationError';
import { LanguageService } from './../../Services/language.service';
import { EmployeeList } from './../../Models/EmployeeList';

import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  public languageModel : EmployeeList;

  constructor(public Service: LanguageService,
    public router:  Router,
    ) { }

  ngOnInit() {
    this.languageModel = new EmployeeList();
  }

  addLanguage()
  {

    this.Service.addLanguage(this.languageModel)
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
