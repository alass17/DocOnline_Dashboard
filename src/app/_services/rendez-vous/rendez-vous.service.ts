import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../../Classes/rendez-vous/rendez-vous';


@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  


  constructor(private http:HttpClient) { }

  PrendreRdv(jour:any,heure:any, objetRdv:any, id_professionnel:any,id_patient:any):Observable<any>{
    // let data = new FormData();
    // data.append("jour",jourRdv)
    // data.append("heure",heureRdv)
    // data.append("objetRdv",objetRdv)
    const data={
      "jour":jour,
      "heure":heure, 
      "objetRdvs":[{
        "idobjet":objetRdv
    }]
      
    }
  
  
    return this.http.post(`http://localhost:8080/rendezvous/ajouter/${id_professionnel}/${id_patient}`,data);

  }


  createRdv(rendezVous: RendezVous,id_professionnel:any,id_patient:any): Observable<RendezVous> {
    return this.http.post<RendezVous>(`http://localhost:8080/rendezvous/ajouter/${id_professionnel}/${id_patient}`, rendezVous);
  }


  getAllRendezVous():Observable<any>{
    return this.http.get(`http://localhost:8080/rendezvous/afficher`)
  }

  getMyRendezVous(id_patient:Number):Observable<any>{
    return this.http.get(`http://localhost:8080/rendezvous/mesrendezvous/${id_patient}`)

  }





affichertouslesrendezvousProf(id_professionnel:any){
  return this.http.get(`http://localhost:8080/rendezvous/mesrendezvousprof/${id_professionnel}`)
}

supprimerRendezVous(idrdv:any){
  return this.http.delete(`http://localhost:8080/rendezvous/supprimer/${idrdv}`)
}

AjouterObjetRdv(libelle:any){
  const data={
    "libelle":libelle
  }
  return this.http.post(`http://localhost:8080/objet/ajouter`,data)
}

TrouverRendezVousParId(idrdv:any){
  return this.http.get(`http://localhost:8080/rendezvous/troverrendezvousparid/${idrdv}`)
}


getAllRendezvousForProfessionnel(professionnelId:any){
  return this.http.get(`http://localhost:8080/rendezvous/patients/${professionnelId}`)

}


}