import { AuthenticationError } from './../../Models/AuthenticationError';
import { LanguageService } from './../../Services/language.service';
import { DashBoardCounts } from './../../Models/DashBoardCount';
import { SharedService } from './../../Services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  dashboardCount: DashBoardCounts;

  constructor(public service: SharedService) {
    this.dashboardCount=new DashBoardCounts();
   }

  ngOnInit() {
    this.service.getDashboardCount()
    .subscribe((Response)=>{
      this.dashboardCount=Response;
      console.log(this.dashboardCount);
      console.log(Response);
      
    }, (error: AuthenticationError)=>{
      console.log(error.error);
    })
  }

}
