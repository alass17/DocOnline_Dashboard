import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { PatientService } from '../_services/Patient/patient.service';
import { RendezVousService } from '../_services/rendez-vous/rendez-vous.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-details-patients',
  templateUrl: './details-patients.component.html',
  styleUrls: ['./details-patients.component.scss']
})
export class DetailsPatientsComponent implements OnInit {
  user: any;
  id: any;
  patients: any;
  imageprofil: any;
  nom: any;
  numero: any;
  email: any;
  adresse: any;
  profession: any;
  professionnels: any;
  rdvss: any;

  p:number=1
  e:number=1

  constructor(private docteurService: DocteursService, private route: ActivatedRoute, private storage: StorageService, private rdvservice: RendezVousService,

    private patientService:PatientService) { }

  ngOnInit(): void {
    this.user = this.storage.getUser().id;
    this.id = this.route.snapshot.params['id']
    

    this.patientService.getPatientById(this.id).subscribe(data => {
      console.log(data)
      this.patients = data;
      this.imageprofil=data.imageprofil
      this.nom = data.nom
      this.numero = data.numero
      this.email = data.email
      this.adresse = data.adresse
       
      console.log("user +" + this.user)
    
    });

    this.docteurService.getAllProfessionnel().subscribe(data => {
      console.log(data)
      this.professionnels = data;
      
    });

    this.patientService.getAllPatient().subscribe(data =>{
      this.patients=data
    })

    this.rdvservice.getMyRendezVous(this.id).subscribe(data =>{
      this.rdvss=data
      console.log(this.rdvss)
    })
  }

  back(): void {
    window.history.back()
  }
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

}