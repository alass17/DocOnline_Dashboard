import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { PatientService } from '../_services/Patient/patient.service';
import { RendezVousService } from '../_services/rendez-vous/rendez-vous.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-detailsprofessionnel',
  templateUrl: './detailsprofessionnel.component.html',
  styleUrls: ['./detailsprofessionnel.component.scss']
})
export class DetailsprofessionnelComponent implements OnInit {
  doctors: any
  id: any
  professionnels: any
  specialites: any
  objets: any
  obj:any
  
  // Objet: RendezVous = {
  //   idrdv: 0,
  //   // jour: '',
  //   // heure: '',
  //   objet:new Objet,
  //   professionnel: new Docteur,
  //   patient: new Patient
  // }
  nom: any = ''
  numero: any = ''
  email: any = ''
  adresse: any = ''
  profession: any = ''
  iddocteur: any;
  user: any;
  imageprofil:any=''

  jourRdv: any
  heureRdv: any
  objetRdv: any

  idrdv!: number
  jour!: any
  heure!: any
  objet!: any
  professionnel!: any
  patient!: any

  rdvs: any
  patients: any;
  idprof: any;
  rdvss: any;

p:number=1
e:number=1


  constructor(private docteurService: DocteursService, private route: ActivatedRoute, private storage: StorageService, private rdvservice: RendezVousService,
    private patientService:PatientService) { }

  ngOnInit(): void {
    this.user = this.storage.getUser().id;
    this.id = this.route.snapshot.params['id']
    

    this.docteurService.getProfessionnelById(this.id).subscribe(data => {
      console.log(data)
      this.doctors = data;
      this.imageprofil=data.imageprofil
      this.nom = data.nom
      this.numero = data.numero
      this.email = data.email
      this.adresse = data.adresse
      this.iddocteur = data.id;
      this.profession = data.specialites  
      console.log("user +" + this.user)
      console.log("docteur +" + this.iddocteur)
    });

    this.docteurService.getAllProfessionnel().subscribe(data => {
      console.log(data)
      this.professionnels = data;
      
    });

    this.rdvservice.getAllRendezvousForProfessionnel(this.id).subscribe(data =>{
      this.patients=data
    })

    

    this.rdvservice.affichertouslesrendezvousProf(this.id).subscribe(data =>{
      this.rdvss=data
      console.log(this.rdvss)
    })
  }

  back(): void {
    window.history.back()
  }
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



}




  // AjouterRendezVous() {
  //   this.Objet.heure = this.heure;
  //   this.Objet.jour = this.jour;
  //   this.Objet.objet = this.objet;
  //   console.log("ertyutryu"+this.objet);  console.log("heure" + this.heure)
  //   console.log("jour" + this.jour)
  //   console.log("user" + this.user)
  //   console.log("docteur" + this.iddocteur)
  //   console.log("obj " + this.obj)
  //   this.rdvservice.PrendreRdv(this.jour, this.heure, this.obj, this.iddocteur, this.user).subscribe(data => {

  //     this.rdvs = data;
  //     console.log(this.jour)
  //     console.log(this.rdvs);

  //   })
  // }

  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  

