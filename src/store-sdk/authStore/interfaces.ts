import { Observable } from "rxjs";

export interface IAuthStore {
  loginData$: Observable<IAuthData>;

  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export interface IAuthData {
  isAuth: boolean;
}
