import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(private http: HttpClient) {}


  login(payload: any) {
    const url = 'api/auth/login'
    return this.http.post(url, payload);
  }
  register(payload: any) {
    const url = 'api/auth/register'
    return this.http.post(url, payload);
  }
}
