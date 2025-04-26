import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormConfigService } from 'src/component/shared/form-config.service';

@Component({
  selector: 'app-dynamic-json',
  templateUrl: './dynamic-json.component.html',
  styleUrls: ['./dynamic-json.component.scss']
})
export class DynamicJsonComponent implements OnInit {

  formConfig:any;
  form:FormGroup;
  constructor(
    private formConfigService:FormConfigService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formConfigService.getFormConfig().subscribe((value)=>{
      this.formConfig=value;
      console.log('value',this.formConfig.formTitle);
      const formBuilder:{[key:string]:any}={};
      this.formConfig.sections[0].fields.forEach((field)=>{
        const required=field.validators?.required;
        formBuilder[field.name]=new FormControl('',required?[Validators.required]:[]);
      })
      this.form=this.fb.group(formBuilder);
      console.log('form',this.form);
    }) 
  }


  get personalDetails():any[]{
    return this.formConfig.sections[0].fields;
  }

   

}
