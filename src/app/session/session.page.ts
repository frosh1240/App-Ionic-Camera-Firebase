import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.class';
import {FormGroup,  Validators, FormBuilder} from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
var $:any;
@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {

  public isLogged:any = false;
  loginForm:FormGroup;
  submitted = false;
  
  constructor(private router:Router, public fb: FormBuilder,public afAuth:AngularFireAuth, public db:AngularFirestore) { }

  ngOnInit() {
    let inputs = document.getElementsByClassName('form_input');
    for(var i = 0; i < inputs.length; i++){
      inputs[i].addEventListener('keyup',function(){
        if(this.value.length >= 1){
          this.nextElementSibling.classList.add('point');
        }else{
          this.nextElementSibling.classList.remove('point');
        }
      })
    };

    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });

   this.observ();
  }

  get f(){ return this.loginForm.controls; }

  user: User = new User();

 
  async onLoginUser(user:User){
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    }catch(error){
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
    }
  } 

  async observ(){
    this.afAuth.auth.onAuthStateChanged(function(user){
      if(user){
        console.log('el usuario existe')
         var displayName = user.displayName;
         var email = user.email;
         console.log(user);
         var emailVerified = user.emailVerified;
         var photoURL = user.photoURL;
         var isAnonymous = user.isAnonymous;
         var uid = user.uid;
         var providerData = user.providerData
       }else{
         console.log('no existe usuario')
       }
    })
  }

  async onLogin(){
    const user = await this.onLoginUser(this.user);
    this.submitted = true;

    if(this.loginForm.invalid){
      return
    }
    if(user){
      this.router.navigate(['/tabs'])
    }else{
      console.log('error')
    }
  }
  

}
