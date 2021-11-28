import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user!: Observable <any>;
  authState: any;
  constructor( private auth: AngularFireAuth) {
   }
   
   //iniciamos sesion con email y contraseña
   loginInFirebase (username: string, password:string){
     return this.auth.signInWithEmailAndPassword(username, password)
   }

   //cerramos sesion
   logOutFirebase(){
     return this.auth.signOut();
   }

   //retorna quien esta logueado
   autenticado(): boolean{
     return this.user!=undefined
   }

   currentUser(){
     return this.auth.authState
   }
}
