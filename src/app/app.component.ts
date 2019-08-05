import { Component } from '@angular/core';

import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-app';
   months = ["January", "Feburary", "March", "April", "May", 
			"June", "July", "August", "September",
			"October", "November", "December"];
	selectedDay: string = '';  //event handler for the select element's change event
  selectChangeHandler (event: any) {
	//update the ui
	this.selectedDay = event.target.value;
	console.log(event.target.value);
  }

}
