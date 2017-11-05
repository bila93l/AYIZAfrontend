import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-dash-board-alert',
  templateUrl: './dash-board-alert.component.html',
  styleUrls: ['./dash-board-alert.component.css']
})
export class DashBoardAlertComponent implements OnInit {

  @Input('alertText') alertText: string;
  @Input('navUrl') navUrl: string;
  @Input('alertCount') alertCount: string;
  
  constructor(public route : Router) { 
    this.alertText = "";
    this.navUrl = "";
    this.alertCount = "";
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  navigate()
  {
    this.route.navigate(['/'+this.navUrl]);
  }

}
