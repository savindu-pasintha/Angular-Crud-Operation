import { Component, OnInit } from '@angular/core';
//Access the services.ts  class to call API Handling methods
import ApiCrudOperationServicesTsfile from '../serviceFolder/crud-operation.service';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.css']
})
export class UserListTableComponent implements OnInit {

  //Array list for data source
  //userDataArrayp : Array<any> = [];

  sampledata = [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
  },
  {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
  },
  {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
  },
  {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
  },
  {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
  },
  {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
  }
  ];

  userData !: any;
  //constructor to call service import name
  constructor(private api: ApiCrudOperationServicesTsfile) {
    this.getUserList();
  }
  //page execution time load
  ngOnInit(): void {

  }

  //Method for view the All users
  getUserList() {
    try {
      this.api.getUsersList(2)
        .subscribe(response => {
          var arr = response.data;
          var toArr = Object.values(response);
          // console.log(toArr[4]);
          var newdata: any = toArr[4];
          this.userData = newdata;
          console.log(this.userData);

          var l = newdata.length;
          //console.log(l);

          /*
       console.log(response)
      
           */

          /*
             for(let i=0; i<newdata.length; i++){
               this.userData[i] = arr[i];
               console.log(this.userData[i]);
             }
            */


          /*
           arr.map((item:any,key:number)=>{
               this.userDataArrayp[key] = item;
               console.log(this.userDataArrayp[key]);
           });
      
          */

        });
    } catch (e) {
      console.log(e);
    }
  }

}
