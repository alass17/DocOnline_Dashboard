import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetService {

  constructor(private http:HttpClient) { }

  getAllObjet():Observable<any>{
    return this.http.get("http://localhost:8080/objet/lister");

  }

  deleteobjet(idobjet:any){
    return this.http.delete(`http://localhost:8080/objet/supprimer/${idobjet}`)
  }

  updateobjet(libelle:any,idobjet:number){
    const data={
      "libelle":libelle
    }
    return this.http.put(`http://localhost:8080/objet/update/${idobjet}`,data)
  }
}
