import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-form';
  myForm: FormGroup;
  forbiddenUsernames = ['sido', 'luffy'];

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(9),
      ]),
      surname: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  // nameNotLongEnough(control: FormControl): { [key: string]: any } | null {
  //   alert(control.value.length);
  //   if (control.value && control.value.length != 10) {
  //     return { nameNotLongEnough: true };
  //   }
  //   return null;
  // }

  onSubmit() {
    console.log(this.myForm);
  }
}
