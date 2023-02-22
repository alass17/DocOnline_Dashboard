import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import Swal from 'sweetalert2';
import { PatientComponent } from '../patient/patient.component';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { ObjetService } from '../_services/objet/objet.service';
import { PatientService } from '../_services/Patient/patient.service';
import { RendezVousService } from '../_services/rendez-vous/rendez-vous.service';
import { SpecialiteService } from '../_services/specialite/specialite.service';
import { UserService } from '../_services/user/user.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  public chart: any;
  patients: any;
  totalpatients: any;
  rdvs: any;
  totalrdvs: any;
  totalprofs: any;
  profs: any;
  users: any;
  total: any;

  p:number=1
  delUser: any;
  deluser: any;
  specs: any;
  objets: any;
  constructor(private rdvService:RendezVousService,private patientService:PatientService,private professionnelService:DocteursService,
    private userService:UserService ,private specialiteService:SpecialiteService,private objetService:ObjetService) { 

    this.patientService.getAllPatient().subscribe(data =>{
      this.patients=data
      this.totalpatients=data.length
    })

    this.rdvService.getAllRendezVous().subscribe(data =>{
      this.rdvs=data
      this.totalrdvs=data.length
    })

    this.professionnelService.getAllProfessionnel().subscribe(data =>{
      this.profs=data
      this.totalprofs=data.length
    })

    this.userService.getAllUsers().subscribe(data=>{
      this.users=data
      this.total=data.length
    })

    this.specialiteService.getAllSpecialite().subscribe(data=>{
      this.specs=data
      // this.total=data.length
    })

    this.objetService.getAllObjet().subscribe(data=>{
      this.objets=data
      // this.total=data.length
    })
  }

  ngOnInit(): void {
    this.createChart();
    
   
  }

  createChart(){
    
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "rendez-vous",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Utilisateurs",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }


  reloadPage(): void {
    window.location.reload();
  }

  popDeleteUser(id:number){
    
    Swal.fire({
      position:'center',
      title: 'Voulez-vous supprimer ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Oui',
      denyButtonText: `Non`,
      imageUrl:'../../assets/img/38213-error.gif',
      imageWidth:'  250px',
      imageHeight:'250px',
      denyButtonColor:'red',
      // cancelButtonText: 'Annuler',
      cancelButtonColor:'red',
      confirmButtonColor: 'green',
      heightAuto: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //Swal.fire('Saved!', '', 'success');
        this.userService.DeleteUser(id).subscribe(data=>{
          this.deluser=data
          console.log(data)
          
        });
       
      } else if (result.isDenied) {
        //Swal.fire('Changes are not saved', '', 'info');
      //  this.route.navigate(['tirage'])
      }
    });
      
  }
    }

    


  
