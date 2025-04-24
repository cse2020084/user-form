import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenValidator } from 'src/component/shared/forbiddenValue';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  public forbiddenWords = /\b(admin|root|user)\b/;
  public countries=['India','Japan','China','Nepal'];

  registrationForm=new FormGroup({
    username:new FormControl('Tim',[Validators.required,Validators.minLength(3),forbiddenValidator(this.forbiddenWords)],),
    password:new FormControl('',[Validators.required]),
    confirmpw:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    term:new FormControl(false,[Validators.requiredTrue]),
  });

  registrationForm2=this.fb.group({
    username:['Tim'],
    password:[''],
    confirmpw:[''],
    country:[''],
    term:[false],
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
      confirmpw:'1234',
      country:this.countries[2],
      term:true,
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
  get country_getter(){
    return this.registrationForm.get('country');
  }

  get term_getter(){
    return this.registrationForm.get('term');
  }

}
