import { UserService } from './Services/user.service';
import { AddressesService } from './Services/addresses.service';
import { CountryService } from './Services/countries.service';
import { CurrencyService } from './Services/currency.service';
import { SharedService } from './Services/shared.service';
import { DashBoardAlertComponent } from './Components/dash-board-alet/dash-board-alert.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LanguageService } from './Services/language.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LanguageComponent } from './Components/language/language.component';
import { HeaderComponent } from './Components/header/header.component';
import { DataTablesModule } from 'angular-datatables';
import { ViewlanguageComponent } from './Components/viewlanguage/viewlanguage.component';
import { EditlanguageComponent } from './Components/editlanguage/editlanguage.component';
import { AddLanguageComponent } from './Components/add-language/add-language.component';
import { CurrenciesComponent } from './Components/currencies/currencies.component';
import { AddCurrencyComponent } from './Components/add-currency/add-currency.component';
import { EditCurrencyComponent } from './Components/edit-currency/edit-currency.component';
import { ViewCurrencyComponent } from './Components/view-currency/view-currency.component';
import { CountriesComponent } from './Components/countries/countries.component';
import { AddCountryComponent } from './Components/add-country/add-country.component';
import { EditCountryComponent } from './Components/edit-country/edit-country.component';
import { ViewCountryComponent } from './Components/view-country/view-country.component';
import { AddressesComponent } from './Components/addresses/addresses.component';
import { AddaddressComponent } from './Components/addaddress/addaddress.component';
import { EditaddressComponent } from './Components/editaddress/editaddress.component';
import { ViewaddressComponent } from './Components/viewaddress/viewaddress.component';
import { UsersComponent } from './Components/users/users.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { ViewUserComponent } from './Components/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    HeaderComponent,
    ViewlanguageComponent,
    EditlanguageComponent,
    AddLanguageComponent,
    DashBoardComponent,
    NotFoundComponent,
    DashBoardAlertComponent,
    CurrenciesComponent,
    AddCurrencyComponent,
    EditCurrencyComponent,
    ViewCurrencyComponent,
    CountriesComponent,
    AddCountryComponent,
    EditCountryComponent,
    ViewCountryComponent,
    AddressesComponent,
    AddaddressComponent,
    EditaddressComponent,
    ViewaddressComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTablesModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: DashBoardComponent
      },
      { 
        path: 'language', 
        component: LanguageComponent 
      },
      { 
        path: 'viewLanguage/:languageId', 
        component: ViewlanguageComponent,
      },
      { 
        path: 'editLanguage/:languageId', 
        component: EditlanguageComponent 
      },
      { 
        path: 'addLanguage', 
        component: AddLanguageComponent 
      },
      { 
        path: 'currency', 
        component: CurrenciesComponent 
      },
      { 
        path: 'viewCurrency/:currencyId', 
        component: ViewCurrencyComponent,
      },
      { 
        path: 'editCurrency/:currencyId', 
        component: EditCurrencyComponent 
      },
      { 
        path: 'addCurrency', 
        component: AddCurrencyComponent 
      },
      { 
        path: 'country', 
        component: CountriesComponent 
      },
      { 
        path: 'viewCountry/:countryId', 
        component: ViewCountryComponent,
      },
      { 
        path: 'editCountry/:countryId', 
        component: EditCountryComponent 
      },
      { 
        path: 'addCountry', 
        component: AddCountryComponent 
      },
      { 
        path: 'address', 
        component: AddressesComponent 
      },
      { 
        path: 'viewAddress/:addressId', 
        component: ViewaddressComponent,
      },
      { 
        path: 'editAddress/:addressId', 
        component: EditaddressComponent 
      },
      { 
        path: 'addAddress', 
        component: AddaddressComponent 
      },
      { 
        path: 'users', 
        component: UsersComponent 
      },
      { 
        path: 'viewUser/:userId', 
        component: ViewUserComponent,
      },
      { 
        path: 'editUser/:userId', 
        component: EditUserComponent 
      },
      { 
        path: 'addUser', 
        component: AddUserComponent 
      },
      
      { 
        path: '**', 
        component: NotFoundComponent 
      },
    ])
  ],
  providers: [LanguageService, SharedService, CurrencyService, CountryService, AddressesService, UserService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }