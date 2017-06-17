import { Component, ViewChild } from '@angular/core';
import { DatePickerComponent } from 'ng2-date-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('birthdate') datePicker: DatePickerComponent;

  config = {
    firstDayOfWeek: "mo",
    format: "YYYY-MM-DD"
  };

  selectedDate: Date;

  open() {
    this.datePicker.api.open();
  }
}
