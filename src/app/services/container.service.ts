import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from './firestore.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ContainerService {
  constructor(
    private firestoreSrv: FirestoreService,
    private lStorageSrv: LocalStorageService
  ) {}

  async guardar(container: any) {
    this.firestoreSrv.guardar(container, 'containers');
  }
  async traer() {
    return this.firestoreSrv.traer('containers');
  }
  async modificar(container: any, containerModificado: any) {
    return this.firestoreSrv.modificar(
      container,
      containerModificado,
      'containers'
    );
  }
  async eliminar(container: any) {
    this.firestoreSrv.eliminar(container, 'containers');
  }
  actualizarLista(): Observable<any> {
    return new Observable((observer) => {
      this.traer().then((res) => {
        // Emite un valor
        observer.next(res);
        observer.complete();
      });
    });
  }
}
