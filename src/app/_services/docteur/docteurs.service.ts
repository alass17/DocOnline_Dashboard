import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docteur } from 'src/app/Classes/docteur/docteur';

@Injectable({
  providedIn: 'root'
})
export class DocteursService {

  api="http://localhost:8080";
  private baseUrl = 'http://localhost:8080/prof/signup';

  private urllll = 'http://localhost:8080/prof/signup/';
  private url: string = 'http://localhost:8080/prof'

  constructor(private http: HttpClient) { }


  // Incrireprofs( nom :any,numero: any,email:any,password :any,confirmpassword: any,
  //   adresse:any,document: File): Observable<any> {

  //   let data = new FormData();

  //   data.append("nom", nom);
  //   data.append("numero", numero);
  //   data.append("email", email);
  //   data.append("password", password);
  //   data.append("confirmpassword", confirmpassword);
  //   data.append("adresse", adresse);
  //   data.append("document", document);



  //   // data.append('region', JSON.stringify(region).slice(1, JSON.stringify(region).lastIndexOf(']')));

  //   return this.http.post("http://localhost:8080/prof/signup", data);
  // }

  // Incrireprofs(nom: string,imageprofil:File, numero: string, email: string, password: string, confirmpassword: string, adresse: string, document:File,idspec:number): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('nom', nom);
  //   formData.append('imageprofil', imageprofil);
  //   formData.append('numero', numero);
  //   formData.append('email', email);
  //   formData.append('password', password);
  //   formData.append('confirmpassword', confirmpassword);
  //   formData.append('adresse', adresse);
  //   formData.append('document', document);
  
  //   return this.http.post<any>(this.urllll + `${idspec}`, formData);
  // }

  
  Inscriptionprofessionnels(nom:any,imageprofil:File,numero:any,email:any,password:any,confirmpassword:any,adresse:any,document:File,idspec:any){
    const data=new FormData();
    data.append("nom",nom)
    data.append("imageprofil",imageprofil)
    data.append("numero",numero)
    data.append("email",email)
    data.append("password",password)
    data.append("confirmpassword",confirmpassword)
    data.append("adresse",adresse)
    data.append("document",document)

    return this.http.post(`http://localhost:8080/prof/signup/${idspec}`,data)

  }

  Modifierprofessionnels(nom:any,imageprofil:File,numero:any,email:any,adresse:any,id:any){
    const data=new FormData();
    data.append("nom",nom)
    data.append("imageprofil",imageprofil)
    data.append("numero",numero)
    data.append("email",email)
    data.append("adresse",adresse)
  

    return this.http.put(`http://localhost:8080/prof/professionnel/${id}`,data)

  }


  getAllProfessionnel():Observable<any>{
    return this.http.get("http://localhost:8080/prof/lister")
  }


  getProfessionnelById(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/prof/trouverprofparId/${id}`)
  }

  createProfessionnel(professionnel: Docteur): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, professionnel);
  }


  modifierProfessionnel(id: number, professionnel: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.url}/professionnel/${id}`, professionnel, { headers });
  }

  //:::::::::::::::::::::::::::::::Delete::::::::::::::::::::::::::::::::::::::::::

  DeleteProf(id_prof:number):Observable<any>{
  
    
    return this.http.delete(`http://localhost:8080/prof/delete/${id_prof}`)
  }
}
