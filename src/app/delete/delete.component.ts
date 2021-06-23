import { Component, OnInit } from '@angular/core';
//services folder acess http methods
import Api from '../serviceFolder/crud-operation.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

   // asign varibales
    id : any = '';
  
   //validation feiled to condition pass
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
  
  
    //call severvicess create method
    deleteMethodForButton(){
      if (this.id.length != 0 ) {
        this.api. deleteUser(this.id).subscribe((res) => {
          //console.log(res);
          alert("ID= "+this.id + "\n" +" Deleted");
        });
      }else{
       alert("Please Enter values !");
      }
    }
 

}
