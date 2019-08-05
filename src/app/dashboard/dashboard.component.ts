import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';
// import { FormControl } from '@angular/forms';  
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	todaydate;
   newcomponent = "Entered in new component created";
   constructor(private myservice: MyserviceService) {}
   emailid;
   formdata;
   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();     
       this.formdata = new FormGroup({
         emailid: new FormControl(),
         passwd: new FormControl()
      });
   }
   onClickSubmit(data) {this.emailid = data.emailid;}

   /*email = new FormControl('');  
  updateEmail() {  
    this.email.setValue('sonoojaiswal@javatpoint.com');  
  }*/
}
