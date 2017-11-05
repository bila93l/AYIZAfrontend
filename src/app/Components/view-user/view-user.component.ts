import { UserService } from './../../Services/user.service';
import { CountryService } from './../../Services/countries.service';
import { AddressesService } from './../../Services/addresses.service';
import { AuthenticationError } from './../../Models/AuthenticationError';
import { CurrencyService } from './../../Services/currency.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LanguageService } from './../../Services/language.service';
import { UserTypeList } from './../../Models/UserTypeList';
import { CountryList } from './../../Models/CountryList';
import { AddressList } from './../../Models/AddressList';
import { EmployeeList } from './../../Models/EmployeeList';
import { UsersList } from './../../Models/UsersList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  public languageModel : UsersList;
  public languageList: EmployeeList[];
  public addressList: AddressList[];
  public CountryList: CountryList[];
  public UserTypeList: UserTypeList[];
  
    constructor(public Service: LanguageService,
      public router:  Router,  
      public addressService: AddressesService, 
      public countryService: CountryService, 
      public userService: UserService, 
      public activeRoute: ActivatedRoute,
      ) { }
  
    ngOnInit() {
      this.languageModel = new UsersList();
      this.Service.getyLanguageList()
      .subscribe((Response) => {
        this.languageList=Response;
        if(this.languageList.length > 0)
        {
          this.languageModel.Language=this.languageList[0].Id;
        }
        
      },(error: AuthenticationError)=>{
        console.log(error.error);
      })

      this.countryService.getCountryList()
      .subscribe((Response) => {
        this.CountryList=Response;
        if(this.CountryList.length > 0)
        {
          this.languageModel.AY_F_CTRY_CODE=this.CountryList[0].CountryId.toString();
        }
        
      },(error: AuthenticationError)=>{
        console.log(error.error);
      })

      this.addressService.getAddressList()
      .subscribe((Response) => {
        this.addressList=Response;
        if(this.addressList.length > 0)
        {
          this.languageModel.Address=this.addressList[0].AddressId;
        }
        
      },(error: AuthenticationError)=>{
        console.log(error.error);
      })

      this.userService.getUserTypes()
      .subscribe((Response) => {
        this.UserTypeList=Response;
        if(this.UserTypeList.length > 0)
        {
          this.languageModel.AY_T_FOA_TYPE=this.UserTypeList[0].UserTypeId;
        }
        
      },(error: AuthenticationError)=>{
        console.log(error.error);
      })

      this.activeRoute.paramMap
      .subscribe(params =>{
        this.languageModel.UserId = parseInt(params.get('userId'));
      });

      this.userService.getUserById((this.languageModel.UserId))
      .subscribe(data => {
        this.languageModel = data;
      }, (error : AuthenticationError) => {
        console.log(error.error);
      });
    }
  
    addUser()
    {
  
      this.userService.addUser(this.languageModel)
      .subscribe(data => {
        
        //console.log('hello');
        this.router.navigate(['/users']);
      },
      (error: AuthenticationError)=>{
        console.log(error.error);
        
      });
      
      //console.log(btoa(this.loginModel.UserName));
    }
    navigateBack()
    {
      this.router.navigate(['/users']);
    }
}
