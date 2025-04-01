import { Component, OnInit } from '@angular/core';
import { User } from 'src/component/user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public  userModel:any=null

  constructor() { 

  }

  ngOnInit(): void {
    this.userModel=new User({username:'Tim',mail:'lop@t.com',password:'1234'});
  }

  onSubmit(userform){
    const forms=document.querySelector('.needs-validation');
    forms.classList.add('was-validated')
    console.log('userform',userform)
  }



  

}
