import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { UserRegisterService } from '../user-register.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  gender: string = 'Female';
  hobby: string[] = [];
  userform: FormGroup;
  submitted: boolean;
  items = [
    { key: 'music', text: 'Music' },
    { key: 'dance', text: 'Dance' },
    { key: 'cric', text: 'Cricket' },
  ];
  constructor(private fb: FormBuilder, private userService : UserRegisterService,
    private router: Router) { }

  ngOnInit() {
    let checkboxGroup = new FormArray(this.items.map(item => new FormGroup({
      id: new FormControl(item.key),
      text: new FormControl(item.text),
      checkbox: new FormControl(false)
    })));

    let hiddenControl = new FormControl(this.mapItems(checkboxGroup.value), Validators.required);
    // update checkbox group's value to hidden formcontrol
    checkboxGroup.valueChanges.subscribe((v) => {
      hiddenControl.setValue(this.mapItems(v));
    });
    this.userform = this.fb.group({
      'name': new FormControl('', Validators.required),
      
      'email': new FormControl('', [Validators.required, Validators.email]),
      'pwd': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'cpwd': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      
      'gender': new FormControl('', Validators.required),
      // 'hobby': new FormControl(''),
      items: checkboxGroup,
      selectedItems: hiddenControl,
    

    });
    // this.userform = new FormGroup({
    //  
    // })
    console.log(">>>", this.userform.controls)
  }
  mapItems(items) {
    let selectedItems = items.filter((item) => item.checkbox).map((item) => item.id);
    return selectedItems.length ? selectedItems : null;
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.userService.getData(this.userform.value).subscribe(
      data => { console.log(">>data>>>",data) },
      err => console.error(err),
      () =>{
       
        this.router.navigate(['display']);
      }
      
    );
    console.log(">>>values", value)
  }
}
