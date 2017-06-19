import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePickerComponent } from 'ng2-date-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('dateDirectivePicker') datePicker: DatePickerComponent;

  config = {
    firstDayOfWeek: "mo",
    format: "YYYY-MM-DD"
  };

  selectedDate: Date;

  constructor(private fb: FormBuilder) {
  }

  public formGroup = this.fb.group({
    datePicker: ["", Validators.required]
  });

  ngOnInit() {
    console.log(this.datePicker);
  }

  open() {
    console.log(this.datePicker);
    console.log(this.datePicker.api);
    this.datePicker.api.open();
  }
}
