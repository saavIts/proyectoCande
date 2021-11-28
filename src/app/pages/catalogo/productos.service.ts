import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Productos } from './producto-interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  public productos!: Observable<Productos[]>; //Colección de productos - Referencia a cada producto
  private productoCollection!: AngularFirestoreCollection<Productos>;//Referencia a firestore

//referencia a la coleccion de productos
constructor(private firestore: AngularFirestore) {
  this.productoCollection = firestore.collection<Productos>('productos');
   console.log(this.productoCollection);
   this.obtenerProductos();
}
  //metodo para obtener productos
  obtenerProductos(){
      return this.productoCollection!.snapshotChanges().pipe(
       map(action=>action.map(a =>a.payload.doc.data() as Productos))
      )
  }  
//marca error en el playload y  en el action
  //agregamos un producto a la base de datos
  agregarProducto(producto: Productos){
    return new Promise(async(resolve, reject)=>{
    try {
      //generamos un id automatico y se lo asignamos al producto
      const id = this.firestore.createId();
      producto.id = id;
      const result = await this.productoCollection.doc(id).set(producto);
      resolve(result);
    } catch (error) {
        reject(error)
    }
  })

    
  } 
}
