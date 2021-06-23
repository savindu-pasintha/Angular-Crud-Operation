//import table data
import {AfterViewInit, Component, ViewChild ,OnInit } from '@angular/core';


//Access the services.ts  class to call API Handling methods
import ApiCrudOperationServicesTsfile  from '../serviceFolder/crud-operation.service';

@Component({
  selector: 'app-dispaly-registed-com',
  templateUrl: './dispaly-registed-com.component.html',
  styleUrls: ['./dispaly-registed-com.component.css']
})

export class DispalyRegistedComComponent implements OnInit {

  //constructor to call service import name
  constructor(private api: ApiCrudOperationServicesTsfile) {
    
   }

  //page execution time load
  ngOnInit(): void {
  }

  
}
