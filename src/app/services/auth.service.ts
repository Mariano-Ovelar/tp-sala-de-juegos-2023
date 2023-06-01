import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  updateProfile,
} from '@angular/fire/auth';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { FirestoreService } from './firestore.service';
import { User } from '../models/user';
import { Fecha } from '../models/fecha';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario: any = null;
  estaLogeado: boolean = false;
  constructor(
    private auth: Auth,
    private lStorageSrv: LocalStorageService,
    private firestoreSrv: FirestoreService
  ) {
    this.actualizarEstadoUsuario().subscribe((res) => {
      this.usuario = res;
      if (this.usuario) {
        this.estaLogeado = true;
      } else {
        this.logout();
      }
    });
  }
  async registro(user: any) {
    return await createUserWithEmailAndPassword(
      this.auth,
      user.email,
      user.password
    ).then(async (res) => {
      await this.upDateUser({
        displayName: user.name,
      });
      return res;
    });
  }
  login(user: any) {
    return signInWithEmailAndPassword(
      this.auth,
      user.email,
      user.password
    ).then(async (res) => {
      const usuario: User = User.GetLoggedUser(await this.traer(), res);
      this.lStorageSrv.setElementLocalstorage('usuario', usuario);
      this.usuario = usuario;
      this.registrarLog();
      return usuario;
    });
  }
  logout() {
    return signOut(this.auth).then(() => {
      this.lStorageSrv.setElementLocalstorage('usuario', null);
      this.usuario = null;
    });
  }
  async upDateUser(user: any) {
    const auth = getAuth();
    const theUser = auth.currentUser;
    if (theUser) return updateProfile(theUser, user);
  }
  actualizarEstadoUsuario(): Observable<any> {
    return new Observable((observer) => {
      this.usuario = this.lStorageSrv.getElementLocalstorage('usuario');
      // Emite un valor
      observer.next(this.usuario);
      observer.complete();
    });
  }

  async guardar(usuario: any) {
    this.firestoreSrv.guardar(usuario, 'usuarios');
  }
  async traer(): Promise<any[]> {
    return this.firestoreSrv.traer('usuarios');
  }
  registrarLog() {
    const fechaIngreso = Fecha.getFechaActual();
    const horaIngreso = Fecha.getHoraActual();
    this.firestoreSrv.guardar(
      {
        usuario: this.usuario,
        fechaIngreso: fechaIngreso,
        horaIngreso: horaIngreso,
      },
      'Log'
    );
  }
}
