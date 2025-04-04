import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  registrationForm=new FormGroup({
    username:new FormControl('Tim'),
    password:new FormControl(''),
    confirmpw:new FormControl('')
  });

  registrationForm2=this.fb.group({
    username:['Tim'],
    password:[''],
    confirmpw:['']
  })


  onSubmit(){
    console.log('registration form',this.registrationForm);
  }

  loadOnClick(){
    this.registrationForm.setValue({
      username:'Ram',
      password:'1234',
      confirmpw:'1234'
    });

  }

}
