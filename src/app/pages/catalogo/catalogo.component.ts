import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Productos } from './producto-interface';
import { AuthService } from 'src/app/autentificacion/auth.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public formularioProducto:FormGroup

  //coleccion de productos
  public productos:Productos[] = [] // es como decir en esta caja voy a guardar los productos
  constructor(private auth:AuthService, private fb:FormBuilder, private productosService:ProductosService) {

    //inicializamos el formulario
    this.formularioProducto = this.fb.group({
      nombre:['', Validators.required],
      categoria:['',Validators.required],
      descripcion:['',Validators.required],
      precio:['',Validators.required],
      stock:['',Validators.required],
      url:['',Validators.required]
    })
   }

   
  ngOnInit(): void {
       this.productosService.obtenerProductos().subscribe((productos: any)=>{
       console.log(productos)
      })
  } 

  guardarProducto(){
    if(!this.formularioProducto.invalid){
      console.log(this.formularioProducto.value);
      //llevar los datos a la base de datos
      this.productosService.agregarProducto(this.formularioProducto.value).then((resultado)=>{
        alert('Producto agregado con exito!');
        this.formularioProducto.reset;
      })
    }
    else{
      alert('El formulario es erroneo')
    }
  }
}