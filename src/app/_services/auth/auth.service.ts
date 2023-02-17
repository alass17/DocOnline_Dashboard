import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/admin/';
const PATIENT_API = 'http://localhost:8080/patient/';
const PROF_API = 'http://localhost:8080/prof/signup/';
const RESET_API = 'http://localhost:8080/api/auth/resetpassword/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  connexion(numeroOrEmail: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin/admin',
      {
        numeroOrEmail,
        password,
      },
      httpOptions
    );
  }

  inscription(nom: string,imageprofil:File,numero:string,email:string,password: string,confirmpassword: string, adresse: string): Observable<any> {
    return this.http.post(
      PATIENT_API + 'signup/admin',
      {
        nom,
        imageprofil,
        numero,
        email,
        password,
        confirmpassword,
        adresse,
      },
      httpOptions
    );
  }

  inscriptionProfessionnel(nom: string,numero:string,email:string,password: string,confirmpassword: string, adresse: string,document:string): Observable<any> {
    return this.http.post(
      PROF_API + 'signup',
      {
        nom,
        numero,
        email,
        password,
        confirmpassword,
        adresse,
        document
      },
      httpOptions
    );
  }


  // logout(): Observable<any> {
  //   return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  // }
  logout(): Observable<any> {
    // return this.http.post(
    //   AUTH_API + 'logout',{},httpOptions
    //   );
    const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
    return this.http.request(req);
  }

  
  reinitialisermotdepasse(email:string): Observable<any> {
    
    return this.http.get(RESET_API + `${email}`);
  }



  ChangerMdp(currentpassword:any,newpassword:any, confirmpassword:any,numero:any):Observable<any>{
  
    const data={
      
      "currentpassword":currentpassword,
      "newpassword":newpassword, 
      "confirmpassword":confirmpassword   
    }
  
  
    return this.http.post(`http://localhost:8080/api/auth/changePassword/${numero}`,data);

  }
}
