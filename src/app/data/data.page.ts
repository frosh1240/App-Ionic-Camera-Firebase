import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { RegisterData } from '../shared/user.class';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})

export class DataPage implements OnInit {
  registerData:RegisterData = new RegisterData();
  RegisterDataForm:FormGroup;
  submitted = false;
  constructor(private router:Router, public fireDatabase:AngularFireDatabase, public AfireAuth:AngularFireAuth, public fireStore:AngularFirestore, public formBuilder:FormBuilder) {}

  ngOnInit() {
    let inputs = document.getElementsByClassName('form_input');
    for(var i = 0; i < inputs.length; i++){
      inputs[i].addEventListener('keyup',function(){
        if(this.value.length >= 1){
          this.nextElementSibling.classList.add('point')
        }else{
          this.nextElementSibling.classList.remove('point')
        }
      })
    }

    this.RegisterDataForm = this.formBuilder.group({
      name:['',[Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      phone:['',[Validators.required]],
      years:['',[Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern('[0-9]*'), Validators.min(10), Validators.max(70)]]
    });

  }

  get f() { return this.RegisterDataForm.controls; }

  async onRegisterDataFire(registerData:RegisterData){
    var userId = this.AfireAuth.auth.currentUser.uid;

    this.fireDatabase.database.ref('users/'+userId).set({
      name:registerData.name,
      username:"",
      phone:registerData.phone,
      years:registerData.years
    })
    
  }  

  async onRegisterData(){
    this.submitted = true;
    const user = this.onRegisterDataFire(this.registerData);
    if(this.RegisterDataForm.invalid){
      return
    }
    if(user){
      this.router.navigate(['/username'])
    }else{
      console.log('error')
    }
  }
}
