import { Component, OnInit } from '@angular/core';
import { AuthService } from './autentificacion/auth.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'TigrisApp';
  public logueado:boolean = false;
  public email:string='';


  constructor(private auth:AuthService){

  }

  ngOnInit(): void{
    this.auth.currentUser().subscribe(user=>{
      if(user){
        this.logueado = true;
      }
       else{
         this.logueado = false;
       }
    })
  }

  cerrarSesion(){
    this.auth.logOutFirebase();
    alert("Cerraste sesión")
  }

 
}


