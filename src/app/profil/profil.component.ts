import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Docteur } from '../Classes/docteur/docteur';
import { AuthService } from '../_services/auth/auth.service';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { PatientService } from '../_services/Patient/patient.service';
import { StorageService } from '../_services/storage/storage.service';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  modifs:any
  informations:string="information"
 

  modif1:any

  

  imageprofil:any
  user:any
  modifpatients:any
  modif:any

  professionnel!: Docteur;
  id!: number;
  changer: any;

  constructor(private storage :StorageService,private userService:UserService,
    private route:  ActivatedRoute,private professionnelService:DocteursService,
    private patientService:PatientService,private authService:AuthService) { 
      this.user = this.storage.getUser() 
  this.modif = {
    nom: this.user.nom,
    numero: this.user.numero,
    email: this.user.email,
    password: null,
    confirmpassword: null,
    adresse: this.user.adresse,
  };

  this.modif1 = {
    numeroOrEmail:null,
    currentpassword: null,
    newpassword: null,
    confirmpassword: null,
  };
}


nom:any

  ngOnInit(): void {
    console.log(this.user);
    this.nom = this.user.nom;    

   
  }

  chargeImageProfil(evente: any){
    this.imageprofil = evente.target["files"][0]
    console.log(this.imageprofil);
  }
  
  onSubmit(): void {
    const { nom,numero, email,adresse } = this.modif;

    this.userService.ModifierAdmin(nom,this.imageprofil,numero, email,adresse,this.user.id).subscribe(data =>{
      this.modifs=data;
      console.log(data)
    })
    
    
  }

 

  ModifierMotdepasse(){
    this.authService.ChangerMdp(this.modif1.currentpassword,this.modif1.newpassword,this.modif1.confirmpassword,this.user.numero).subscribe(data=>{
      this.changer=data
      console.log(data)
    })
  }


   // back(): void {
  //   window.history.back()
  // }

  // validerForm() {
  //   if (this.modif.currentpassword && this.modif1.currentpassword) {
  //     // Si les deux formulaires ont été remplis, affichez un message d'erreur
  //     console.log("Erreur: vous ne pouvez remplir qu'un seul formulaire à la fois.");
  //   } else if (this.modif.currentpassword) {
  //     // Si seul le premier formulaire a été rempli, appelez onSubmit()
  //     this.onSubmit();
  //   } else if (this.modif1.currentpassword) {
  //     // Si seul le deuxième formulaire a été rempli, appelez ModifierMotdepasse()
  //     this.ModifierMotdepasse();
  //   } else {
  //     // Si aucun formulaire n'a été rempli, affichez un message d'erreur
  //     console.log("Erreur: vous devez remplir l'un des deux formulaires.");
  //   }
  // }
}
