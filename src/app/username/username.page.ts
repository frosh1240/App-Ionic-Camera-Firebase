import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { UserName } from '../shared/user.class';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.page.html',
  styleUrls: ['./username.page.scss'],
})
export class UsernamePage implements OnInit {
  usernameAvailable:boolean;
  username:string;
  userData: UserName = new UserName();
  registerUserForm:FormGroup;
  submitted = false;
  constructor(public ServiceAuth:AuthService, private router:Router, public formBuilder:FormBuilder , public firestore:AngularFirestore, public fireauth:AngularFireAuth, public database:AngularFireDatabase) { }

  ngOnInit() {
    let inputs = document.getElementsByClassName('form_input');
    for(var i=0; i < inputs.length; i++){
      inputs[i].addEventListener('keyup',function(){
        if(this.value.length >= 1){
          this.nextElementSibling.classList.add('point');
        }else{
          this.nextElementSibling.classList.remove('point')
        }
      })
    }

    this.registerUserForm = this.formBuilder.group({
      username:['',[Validators.required]]
    });
  }

  get f(){return this.registerUserForm.controls}

  checkUsername(event){
    const inputValue = event.target.value;
    const verific = this.ServiceAuth.checkUsername(inputValue);
    if(verific){
      console.log('esta repetido' + inputValue)
    }else if(!verific){
      console.log('no esta repetido'+ inputValue)
    }
  }

  async UpdateUserName(userData:UserName){
    var userId = this.fireauth.auth.currentUser.uid;
    
    this.database.object(`/users/${userId}`).update({"username":userData.username});
    this.database.database.ref('usernames/'+userId).set({username:userData.username});
  }

  async onRegisterUser(){
    this.submitted=true;
    const user = this.UpdateUserName(this.userData);
    if(this.registerUserForm.invalid){
      return
    }
    if(user){
      alert('hola')
    }else{
      console.log('error')
    }
  }
}
