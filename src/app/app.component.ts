import { Component, ViewChild, OnInit } from '@angular/core';
import { DatePickerComponent } from 'ng2-date-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('birthdate') datePicker: DatePickerComponent;

  config = {
    firstDayOfWeek: "mo",
    format: "YYYY-MM-DD"
  };

  selectedDate: Date;

  ngOnInit() {
    console.log(this.datePicker);
  }

  open() {
    console.log(this.datePicker);
    console.log(this.datePicker.api);
    this.datePicker.api.open();
  }
}
