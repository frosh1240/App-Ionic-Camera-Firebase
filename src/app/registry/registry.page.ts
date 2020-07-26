import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import {FormGroup,  Validators, FormBuilder} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {

  user:User = new User();
  RegisterForm: FormGroup;
  submitted = false;

  constructor(private authSvc:AuthService, private router: Router, public auth:AngularFireAuth, public fb: FormBuilder, public db:AngularFirestore) { }

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
    }

    this.RegisterForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });

    this.observ();
  }

  get f(){ return this.RegisterForm.controls; }

  /*async onRegisterLogin(user:User){
    return this.db.collection('user').add({
      nickname:user.nickname,
      email:user.email,
      password: user.password
    });
  }*/

  async onRegisterCredential(user:User){
    this.auth.auth.createUserWithEmailAndPassword(user.email,user.password)
    .then(() => this.auth.auth.currentUser.sendEmailVerification()
      .then(() => {
        console.log('verifica tu correo electronico')
      }).catch((error) => {
        console.log('error al enviar'+ error);
      })
    )
  }

  
  async observ(){
    this.auth.auth.onAuthStateChanged(function(user){
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

  async onRegister(){
    this.submitted = true;
    const user = this.onRegisterCredential(this.user);
    if(this.RegisterForm.invalid){
      return
    }
    if(user){
      this.router.navigate(['/data']);
    }
  }

  

  /*async onRegister(){
    this.submitted = true;
    const user = await this.authSvc.onRegister(this.user);
    if(user){
      this.router.navigate(['/tabs'])
    }else{
      console.log('error')
    }

    if(this.RegisterForm.invalid){
      return
    }
  }*/
}
