import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    username:new FormControl('Tim',[Validators.required,Validators.minLength(3)]),
    password:new FormControl('',[Validators.required]),
    confirmpw:new FormControl('',[Validators.required])
  });

  registrationForm2=this.fb.group({
    username:['Tim'],
    password:[''],
    confirmpw:['']
  })


  onSubmit(){
    console.log('registration form',this.registrationForm);
    if(this.registrationForm.valid){
  }else{
    this.registrationForm.markAllAsTouched();
  }
}

  loadOnClick(){
    this.registrationForm.setValue({
      username:'Ram',
      password:'1234',
      confirmpw:'1234'
    });

  }

  get username_getter(){
    return this.registrationForm.get('username');
  }

  get password_getter(){
    return this.registrationForm.get('password');
  }
  get confirmpw_getter(){
    return this.registrationForm.get('confirmpw');
  }

}
