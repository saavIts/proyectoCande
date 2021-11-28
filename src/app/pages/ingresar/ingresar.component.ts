//imports necesarios para crear la funcionalidad del formulario
import { AuthService } from 'src/app/autentificacion/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})

//la clase de nuestro login se va a llamar ingresar component aca vamos a tener nuestro constructor 
export class IngresarComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder, private authSesion:AuthService, private router: Router) { 
    this.formularioLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

  }
  ngOnInit(): void {
  }

  //llamamos el metodo iniciar sesion
  iniciarSesion(){
    if(!this.formularioLogin.invalid){
      this.authSesion.loginInFirebase(this.formularioLogin.value.username, this.formularioLogin.value.password)
      alert ("Iniciaste sesión")
      this.router.navigateByUrl("inicio")
    }
    else{
      alert("Datos erroneos")
    }
  }
}

