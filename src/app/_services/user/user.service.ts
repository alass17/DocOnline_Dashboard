import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }



  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }


  getAllUsers(): Observable<any> {
    return this.http.get(`http://localhost:8080/user/afficher`);
  }

  getUsersById(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/admin/trouverUserparId/${id}`)
  }

  ModifierAdmin(nom:any,imageprofil:File,numero:any,email:any,adresse:any,id:any){
    const data=new FormData();
    data.append("nom",nom)
    data.append("imageprofil",imageprofil)
    data.append("numero",numero)
    data.append("email",email)
    data.append("adresse",adresse)
  

    return this.http.put(`http://localhost:8080/admin/modifieradmin/${id}`,data)

  }
  
}