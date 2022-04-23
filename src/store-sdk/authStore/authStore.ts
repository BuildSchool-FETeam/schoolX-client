import { injectable } from "inversify";
import { BehaviorSubject } from "rxjs";
import { IAuthData, IAuthStore } from "./interfaces";

@injectable()
export class AuthStore implements IAuthStore {
  private loginDataSubject = new BehaviorSubject<IAuthData>({ isAuth: true });

  loginData$ = this.loginDataSubject.asObservable();

  async login() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.loginDataSubject.next({ isAuth: true });
        resolve();
      }, 1000);
    });
  }

  async logout() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.loginDataSubject.next({ isAuth: false });
        resolve();
      }, 1000);
    });
  }
}
