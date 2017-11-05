import { UserService } from './../../Services/user.service';
import { UsersList } from './../../Models/UsersList';
import { EmployeeList } from './../../Models/EmployeeList';
import { AuthenticationError } from './../../Models/AuthenticationError';
import { LanguageService } from './../../Services/language.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Rx";
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<DataTables.Settings> = new Subject<DataTables.Settings>();
  employeeList: UsersList[]=[];
  constructor(public lanService : UserService,
    public router:  Router) { 

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.lanService.getUserList()
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
    console.log(Id);
    this.router.navigate(["/viewUser", Id]); 
  }

  copy(Id: number)
  {
    if(confirm("Do you want to copy this User?"))
    {
      this.lanService.copyUser(Id)
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
    this.router.navigate(["/editUser", Id]); 
  }

  add()
  {
    this.router.navigate(["/addUser"]); 
  }

  delete(Id: number)
  {
    if(confirm("Do you want to delete this User?"))
    {
      this.lanService.deleteUser(Id)
      .subscribe(data => {
        location.reload();
      },
      (error: AuthenticationError)=>{
        console.log(error.error);  
      })
    }
  }

}
