import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }

  //:::::::::::::::::Afficher les notifs d'un patient:::::::::::::::::::::::

 AffichernotificationforPatient(id_patient:any){
  return this.http.get(`http://localhost:8080/patient/patients/${id_patient}/notifications`)

}  


  //:::::::::::::::::Afficher les notifs d'un professionnel:::::::::::::::::::::::

  AffichernotificationforProfessionnel(id_professionnel:any){
    return this.http.get(`http://localhost:8080/prof/professionnels/${id_professionnel}/notifications`)
  
  } 
}
