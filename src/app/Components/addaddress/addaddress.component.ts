import { AuthenticationError } from './../../Models/AuthenticationError';
import { Router } from '@angular/router';
import { AddressesService } from './../../Services/addresses.service';
import { LanguageService } from './../../Services/language.service';
import { EmployeeList } from './../../Models/EmployeeList';
import { AddressList } from './../../Models/AddressList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.component.html',
  styleUrls: ['./addaddress.component.css']
})
export class AddaddressComponent implements OnInit {

  public languageModel : AddressList;
  public languageList: EmployeeList[];
  
    constructor(public Service: LanguageService,
      public router:  Router, public addressService: AddressesService
      ) { }
  
    ngOnInit() {
      this.languageModel = new AddressList();
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
  
    addAddress()
    {
  
      this.addressService.addAddress(this.languageModel)
      .subscribe(data => {
        
        //console.log('hello');
        this.router.navigate(['/address']);
      },
      (error: AuthenticationError)=>{
        console.log(error.error);
        
      });
      
      //console.log(btoa(this.loginModel.UserName));
    }
    navigateBack()
    {
      this.router.navigate(['/address']);
    }

}
