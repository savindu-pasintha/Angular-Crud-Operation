import { Component, OnInit } from '@angular/core';
//services folder acess http methods
import Api from '../serviceFolder/crud-operation.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

   // asign varibales
   name = ''; job = ''; id : any = '';
  
   //validation feiled to condition pass
   emptyNameCondition = true;
   emptyJobCondition = true;
   emptyIdCondition = true;
   enableButton = false;
 
   
 
   //create call the services
   constructor(private api : Api) { }
 
   ngOnInit(): void {
   }
 

   //getName()
   getUserId(event: any) { // without type info
    this.id = event.target.value ;
    //console.log(this.name);
    this.emptyIdCondition = false;
    this.enableButton = true;
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
    updateMethodForButton(){
      if ((this.name.length != 0) && (this.job.length != 0) && (this.id.length != 0 )) {
        this.api.updateUser(this.id,{"name" : this.name, "job" : this.job}).subscribe((res) => {
          console.log(res);
          alert("ID= "+this.id + "\n" +"Name= "+ this.name + "\n" +"Job= "+ this.job + "\n" +"Updated-tmsp= "+ res.updatedAt);
        });
      }else{
       alert("Please Enter values !");
      }
    }
 
}
