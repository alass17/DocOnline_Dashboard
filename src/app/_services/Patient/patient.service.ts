import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docteur } from 'src/app/Classes/docteur/docteur';
import { RendezVous } from 'src/app/Classes/rendez-vous/rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private BASE_URL = 'http://localhost:8080/api';
  
  private APPOINTMENT_URL = `${this.BASE_URL}\\public\\appointment\\save`;
  private MEDECIN_LIST_URL = `${this.BASE_URL}\\public\\medecin`;
  private AVAILABILITY_LIST_URL = `${this.BASE_URL}\\public\\availability`;

  constructor(private http: HttpClient) { }

  ModifierPatient(nom:any,imageprofil:File,numero:any,email:any,adresse:any,id:any){
    const data=new FormData();
    data.append("nom",nom)
    data.append("imageprofil",imageprofil)
    data.append("numero",numero)
    data.append("email",email)
    data.append("adresse",adresse)
  

    return this.http.put(`http://localhost:8080/patient/modifierpatient/${id}`,data)

  }

inscriptionPatient(nom: string,imageprofil:File,numero:string,email:string,password: string,confirmpassword: string, adresse: string): Observable<any> {
const data =new FormData()
data.append("nom",nom)
data.append("imageprofil",imageprofil)
data.append("numero",numero)
data.append("email",email)
data.append("password",password)
data.append("confirmpassword",confirmpassword)
data.append("adresse",adresse)

    return this.http.post( `http://localhost:8080/patient/signup`,data)
  }

  // Take Appointment
  PrendreRdv(appointmentData: RendezVous,idpatient:Number,idobjet:Number): Observable<any> {
    return this.http.post(`http://localhost:8080/api/public/rendezvous/save/${idpatient}/${idobjet}`, appointmentData);
}
// Get Medecin List
getAllMedecin(): Observable<any> {
  return this.http.get<Docteur[]>(`http://localhost:8080/prof/lister`);
}
// Get Availability.
getAllAvailabilities(availabilityRequest: any): Observable<any> {
    return this.http.post(`http://localhost:8080/api/public/availability`, availabilityRequest);
}

getPatientById(id:any):Observable<any>{
  console.log(id)
  return this.http.get(`http://localhost:8080/patient/trouverpatientparId/${id}`)
}

getAllPatient():Observable<any>{
  return this.http.get(`http://localhost:8080/patient/lister`)

}

DeletePatient(id_patient:number):Observable<any>{
  
    
  return this.http.delete(`http://localhost:8080/patient/delete/${id_patient}`)
}









}
