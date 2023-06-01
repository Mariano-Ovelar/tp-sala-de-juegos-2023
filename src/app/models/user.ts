export interface IUser {
  uid: string;
  name: string;
  email: string;
  rol: string;
  password?: string;
}

export class User implements IUser {
  uid: string = '';
  name: string = '';
  email: string = '';
  rol: string = '';
  password?: string = '';

  public static GetLoggedUser(listaUser: any[], user: any) {
    const userEncontrado: User = listaUser.find(
      (item: any) => item.uid === user.user.uid
    );
    return userEncontrado;
    /* return {
      uid: listaUser.user.uid,
      name: listaUser.user.displayName,
      email: listaUser.user.email,
    }; */
  }
}
