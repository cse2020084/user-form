import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-conditional',
  templateUrl: './dynamic-conditional.component.html',
  styleUrls: ['./dynamic-conditional.component.scss']
})
export class DynamicConditionalComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loadForm();
    this.settingValidators();
  }

  public form:FormGroup;
  public paymentMethods:string[]=['Cash','Cards','UPI','Draft','Online Banking'];

  public loadForm(){
    this.form=this.fb.group({
      name:['',[Validators.required]],
      paymentType:['',[Validators.required]],
      //it will  be better if you just call cardDetails dynamically using addControl/removeControl
      //and not like this, but below is good too for smaller forms
      cardDetails:this.fb.group({
        nameCard:[''],
        numberCard:['']
      }),
    })

  }

  public settingValidators(){


    this.paymentType.valueChanges.subscribe(value=>{
      Object.keys(this.cardDetails?.controls || {}).forEach((key)=>{
        const control=this.cardDetails.get(key) as FormControl;
        if(value==='Cards'){
          control.setValidators(Validators.required);
        }else{
          control.clearValidators();       
        }
        control.updateValueAndValidity();
      })
      // if(value=='Cards'){
      //   Object.keys(this.cardDetails?.controls || {}).forEach((key:string)=>{
      //     const control=this.cardDetails.get(key) as FormControl;
      //     control.setValidators(Validators.required);
      //     control.updateValueAndValidity();
      //   })
      // }else{
      //   Object.keys(this.cardDetails?.controls || {}).forEach((key:string)=>{
      //     const control=this.cardDetails.get(key) as FormControl;
      //     control.clearValidators();
      //     control.updateValueAndValidity();
      //   })
      
      // }
    })
  }

  public get name() {return this.form.get('name');}
  public get paymentType() {return this.form.get('paymentType')}
  public get cardDetails():FormGroup {return this.form.get('cardDetails') as FormGroup}
  onSubmit(){
    console.log('form ', (this.form.get('cardDetails') as FormGroup)?.controls)
  }
}
