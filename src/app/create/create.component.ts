import { Component, OnInit } from '@angular/core';
//services folder acess http methods
import Api from '../serviceFolder/crud-operation.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // asign varibales
  name = ''; job = '';
  
  //validation feiled to condition pass
  emptyNameCondition = true;
  emptyJobCondition = true;
  enableButton = false;

  

  //create call the services
  constructor(private api : Api) { }

  ngOnInit(): void {
  }

  //getName()
  getUserName(event: any) { // without type info
   this.name = event.target.value ;
   //console.log(this.name);
   this.emptyNameCondition = false;
   this.enableButton = true;
  }
  //get user job()
  getUserJob(event: any) { // without type info
    this.job = event.target.value ;
   // console.log(this.job);
   this.emptyJobCondition = false;
   this.enableButton = true;
   }
 
   //call severvicess create method
   createMethodForButton(){
     if ((this.name.length != 0) && (this.job.length != 0)) {
       this.api.postUserCreate({ "name": this.name, "job": this.job }).subscribe((res) => {
         console.log(res);
         alert("ID= "+res.id + "\n" +"Name= "+ res.name + "\n" +"Job= "+ res.job + "\n" +"Created-tmsp= "+ res.createdAt);
       });
     }else{
      alert("Please Enter values !");
     }
   }

}
