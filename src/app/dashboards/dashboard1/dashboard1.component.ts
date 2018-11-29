import { Component, OnInit, AfterViewInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { HttpErrorResponse } from '@angular/common/http';
import {DashboardService} from '../dashboardservice';

@Component({
	templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.css']
})

export class Dashboard1Component implements OnInit,AfterViewInit {
    subtitle:string;
    authuser = [];
    public Companycount:number;
	constructor(private _auth:AuthService, private _router : Router,private _app : AppComponent, private dashboardservice:DashboardService) {
        this.subtitle = "This is some text within a card block."
        this.GetComapnyCount();
    }
    islogged() {
        if (!this._auth.isAuthenticated()) {
      
           this._router.navigate(['/authentication/login'])
            return false;
        }
        return true;
      }
    // This is for the dashboar line chart
    // lineChart
    public lineChartData: Array<any> = [
        { data: [50, 130, 80, 70, 180, 105, 250], label: 'Sales' },
        { data: [80, 100, 60, 200, 150, 100, 150], label: 'Earnings' }
    ];
    ngOnInit(){
        if (!this.islogged()) {
            return false;
        }
    }

    GetComapnyCount(){
        debugger;
    this.dashboardservice.GetCompanyCount().subscribe(res=>{
        debugger;
       this.Companycount = res.data.client_company;
    },        
    err => {
    });
	}
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: "rgba(120, 130, 140, 0.13)"
            }  
          }],
          xAxes: [{
            gridLines: {
              color: "rgba(120, 130, 140, 0.13)"
            },
          }]
        },
        lineTension:10,
        responsive: true,
        maintainAspectRatio: false
        
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(25,118,210,0.0)',
            borderColor: 'rgba(25,118,210,1)',
            pointBackgroundColor: 'rgba(25,118,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(25,118,210,0.5)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(38,218,210,0.0)',
            borderColor: 'rgba(38,218,210,1)',
            pointBackgroundColor: 'rgba(38,218,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(38,218,210,0.5)'
        }
        
    ];
    public lineChartLegend: boolean = false;
    public lineChartType: string = 'line';

    
    
    // Doughnut
    public doughnutChartLabels: string[] = [
        'Sales',
        'Earning',
        'Cost'
    ];
    
    public doughnutChartOptions: any = {
        responsive: true,
        maintainAspectRatio: false
    }
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';
    
   // Sales Analytics Pie chart
    public pieChartLabels: string[] = [
        'Sales',
        'Earning',
        'Cost'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';
        
    
	ngAfterViewInit(){
        var sparklineLogin = function() {
            (<any>$('.spark-count')).sparkline([4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9], {
                type: 'bar',
                width: '100%',
                height: '70',
                barWidth: '2',
                resize: true,
                barSpacing: '6',
                barColor: 'rgba(255, 255, 255, 0.3)'
            });
        }
        var sparkResize;

        sparklineLogin();
    }
    

}