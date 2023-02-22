import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  constructor(private http:HttpClient) { }
  getAllSpecialite():Observable<any>{
    return this.http.get(`http://localhost:8080/specialite/afficher`);

  }

  AjouterSpecialite(libelle:any):Observable<any>{
    const data={
      "libelle":libelle
    }
    return this.http.post(`http://localhost:8080/specialite/ajouter`,data);

  }
}
