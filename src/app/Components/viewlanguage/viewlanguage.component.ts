import { AuthenticationError } from './../../Models/AuthenticationError';
import { Router, ActivatedRoute } from '@angular/router';
import { LanguageService } from './../../Services/language.service';
import { EmployeeList } from './../../Models/EmployeeList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewlanguage',
  templateUrl: './viewlanguage.component.html',
  styleUrls: ['./viewlanguage.component.css']
})
export class ViewlanguageComponent implements OnInit {

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

      navigateBack()
      {
        this.router.navigate(['/language']);
      }
}
