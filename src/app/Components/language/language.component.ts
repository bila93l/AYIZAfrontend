import { EmployeeList } from './../../Models/EmployeeList';
import { AuthenticationError } from './../../Models/AuthenticationError';
import { LanguageService } from './../../Services/language.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Rx";
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<DataTables.Settings> = new Subject<DataTables.Settings>();
  employeeList: EmployeeList[]=[];
  constructor(private lanService : LanguageService,
    private router:  Router) { 

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.lanService.getyLanguageList()
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
    this.router.navigate(["/viewLanguage", Id]); 
  }

  copy(Id: number)
  {
    if(confirm("Do you want to copy this language?"))
    {
      this.lanService.copyLanguage(Id)
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
    this.router.navigate(["/editLanguage", Id]); 
  }

  add()
  {
    this.router.navigate(["/addLanguage"]); 
  }

  delete(Id: number)
  {
    if(confirm("Do you want to delete this language?"))
    {
      this.lanService.deleteLanguage(Id)
      .subscribe(data => {
        location.reload();
      },
      (error: AuthenticationError)=>{
        console.log(error.error);  
      })
    }
  }

}
