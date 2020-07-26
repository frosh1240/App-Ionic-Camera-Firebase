import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User,UserName } from '../shared/user.class';
import { switchMap } from 'rxjs/operators'; 
import { AngularFireDatabase } from '@angular/fire/database';

export class UserData{
  username:string = "";
  uid:string;
  constructor(auth){
    this.uid = auth.uid
  }
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  CurrentUser:UserData;
  public isLogged:any = false;

  constructor(public afAuth:AngularFireAuth, public database:AngularFireDatabase) { 
    afAuth.authState.subscribe( user => (this.isLogged = user));
  }

  get hasUsername(){
    return this.CurrentUser.username ? true : false;
  }

  checkUsername(username:string){
    return this.database.object(`usernames/${username}`)
  }

  //registrar metodos de usuarios
  //login
/*
  async onLogin(user:User){
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(
        user.email, 
        user.password);
    } catch (error){
      console.log('Error on Register user', error);
    } 
  }*/
  //registro
  /*async onRegister(user:User){
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
    } catch (error) {
      console.log('Error on Register user', error);
    }
  }*/
}
