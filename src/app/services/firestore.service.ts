import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  async guardar(obj: any, coleccion: string) {
    const col = collection(this.firestore, coleccion);
    // Guardar el objeto con un ID automático
    const docRef = await addDoc(col, obj);
    const id = docRef.id;

    // Actualizar el campo 'id' del objeto guardado
    const actorDocRef = doc(col, docRef.id);
    await setDoc(actorDocRef, { ...obj, id }).then(()=>{
    });
  }
  async traer(coleccion: string) {
    const col = collection(this.firestore, coleccion);
    const Snapshot = await getDocs(col);
    const list = Snapshot.docs.map((doc) => doc.data());
    localStorage.setItem(coleccion, JSON.stringify(list));
    return list;
  }

  async modificar(obj: any, objModificado: any, coleccion: string) {
    const col = collection(this.firestore, coleccion);
    const docRef = doc(col, obj.id); // Suponiendo que 'obj' tiene una propiedad 'id'

    // Actualizar el documento con los datos del contenedor modificado
    setDoc(docRef, objModificado, { merge: true });

  }
  async eliminar(obj: any, coleccion: string) {
    this.modificar(obj, { docActivo: false }, coleccion);
  }
}
