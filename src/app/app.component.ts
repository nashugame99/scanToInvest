import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface CustomerInteraction {
  customer_interactions: InteractionElement[];
}

export interface InteractionElement {
  interaction_id: number;
  interaction_type: string;
  date: string;
  description: string;
  lob: string;
  status: string;
  interaction_outcome: string;
  crn: string;
}

export interface DropDownModel {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: InteractionElement[] = [
  {interaction_id:1, date: "2022-10-21", interaction_type: 'Loan Enquery', lob: 'WIMT', status: "Open", description: "Enquired about loan", interaction_outcome: "Casual", crn:"123456789"}
 // {date: "2022-10-21", interactionType: 'Loan Enquery', LOB: 'Investment Banking', status: "Open", description: "Enquired about loan", interactionOutcome: "Casual"},
 // {date: "2022-10-21", interactionType: 'Loan Enquery', LOB: 'WIMT', status: "Open", description: "Enquired about loan", interactionOutcome: "Casual"},
  //{date: "2022-10-21", interactionType: 'Loan Enquery', LOB: 'Investment Banking', status: "Open", description: "Enquired about loan", interactionOutcome: "Casual"},
 // {date: "2022-10-21", interactionType: 'Loan Enquery', LOB: 'WIMT', status: "Open", description: "Enquired about loan", interactionOutcome: "Casual"}
];

const CUST_ELEMENT_DATA: CustomerInteraction = {
  customer_interactions:[{interaction_id:1, date:"2022-10-21 00:00:00",lob:"IB", status:"Closed", interaction_outcome:"Invested all money as advisor suggested.", description:"Customer used online investment platform.",interaction_type:"Looking",crn:"123456789"}]};
 //  {date: "2022-10-21", interactionType: 'Loan Enquery', LOB: 'WIMT', status: "Open", description: "Enquired about loan", interactionOutcome: "Casual"}
 // {date: "2022-10-21", interactionType: 'Loan Enquery', LOB: 'Investment Banking', status: "Open", description: "Enquired about loan", interactionOutcome: "Casual"},
  //{date: "2022-10-21", interactionType: 'Loan Enquery', LOB: 'WIMT', status: "Open", description: "Enquired about loan", interactionOutcome: "Casual"},
 // {date: "2022-10-21", interactionType: 'Loan Enquery', LOB: 'Investment Banking', status: "Open", description: "Enquired about loan", interactionOutcome: "Casual"},
  //{date: "2022-10-21", interactionType: 'Loan Enquery', LOB: 'WIMT', status: "Open", description: "Enquired about loan", interactionOutcome: "Casual"}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'customerActivitySharingApp';

  userName : string;
  lobName : string;
  userResponse : any;
  LOBResponse : any;
  customerInteraction : CustomerInteraction;
  customerLOBInteraction : CustomerInteraction;
  interactionElements: InteractionElement[];
  displayedColumns: string[] = ['date', 'LOB', 'description', 'interactionType', 'status', 'interactionOutcome'];
  interactions: DropDownModel[] = [
    {value: 'enquiry', viewValue: 'Enquiry'},
    {value: 'loan', viewValue: 'Loan'},
    {value: 'policy', viewValue: 'Policy'},
    {value: 'transaction', viewValue: 'Transaction'}
  ];

  status: DropDownModel[] = [
    {value: 'open', viewValue: 'Open'},
    {value: 'closed', viewValue: 'Closed'},
    {value: 'inprogress', viewValue: 'Inprogress'}
  ];
  dataSource = new MatTableDataSource<InteractionElement>();

  constructor(private http : HttpClient) { 
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.customerInteraction = CUST_ELEMENT_DATA.customer_interactions;
   
   // this.dataSource.paginator = this.paginator;
  }

  searchUser() {
    if(this.LOBResponse) {
      this.clearLOBSearch();
    }
   // this.dataSource = new MatTableDataSource<InteractionElement>(CUST_ELEMENT_DATA.customer_interactions);
    this.userResponse = this.http.get("http://localhost:8080/api/v1/customer-interactions-by-crn?crn=" + this.userName)
      .subscribe((userResponse) => {
        this.userResponse = userResponse;
        this.customerInteraction = this.userResponse;
        this.dataSource = new MatTableDataSource<InteractionElement>(this.customerInteraction.customer_interactions);
      }, error => { console.log("Error --> " + error) });
  }

  clearSearch() {
    if(this.LOBResponse) {
      this.clearLOBSearch();
    }
    this.userName = '';
    this.userResponse = '';
  }

  searchLOB() {
    if (this.userResponse) {
      this.clearSearch();
    }
    this.LOBResponse = this.http.get("http://localhost:8080/api/v1/customer-interactions-by-lob?crn=" + this.userName + "&lob=" +this.lobName)
      // .subscribe((LOBResponse) => this.LOBResponse = LOBResponse);
      // this.customerLOBInteraction = this.LOBResponse;
      // this.dataSource = new MatTableDataSource<InteractionElement>();
      // this.dataSource = new MatTableDataSource<InteractionElement>(this.customerLOBInteraction.interactionElements);
      .subscribe((LOBResponse) => {
        this.LOBResponse = LOBResponse;
        this.customerLOBInteraction = this.LOBResponse;
        this.dataSource = new MatTableDataSource<InteractionElement>(this.customerLOBInteraction.customer_interactions);
      }, error => { console.log("Error --> " + error) });
  }

  clearLOBSearch() {
    if(this.userResponse) {
      this.clearSearch();
    }
    this.lobName = '';
    this.LOBResponse = '';
  }

  redirectToHome() {
    window.location.href = "http://localhost:8080";
  }

}
