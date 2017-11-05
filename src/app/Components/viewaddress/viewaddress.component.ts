import { AddressesService } from './../../Services/addresses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from './../../Services/language.service';
import { EmployeeList } from './../../Models/EmployeeList';
import { AddressList } from './../../Models/AddressList';
import { AuthenticationError } from './../../Models/AuthenticationError';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewaddress',
  templateUrl: './viewaddress.component.html',
  styleUrls: ['./viewaddress.component.css']
})
export class ViewaddressComponent implements OnInit {

  public languageModel : AddressList;
  public languageList: EmployeeList[];
  

  constructor(public Service: LanguageService,
    public activeRoute: ActivatedRoute,
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

    this.activeRoute.paramMap
    .subscribe(params =>{
      this.languageModel.AddressId = parseInt(params.get('addressId'));
    });

    this.addressService.getAddressById((this.languageModel.AddressId))
    .subscribe(data => {
      this.languageModel = data;
    }, (error : AuthenticationError) => {
      console.log(error.error);
    });
  }

  addAddress()
  {

    this.addressService.editAddress(this.languageModel)
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
