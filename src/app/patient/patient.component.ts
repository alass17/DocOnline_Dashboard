import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PatientService } from '../_services/Patient/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patients: any;
  delpatients: any;

  constructor(private patient:PatientService) { }

  ngOnInit(): void {

    this.patient.getAllPatient().subscribe(data =>{
      this.patients=data
    })
  }

  popDeletePatient(id_patient:number){
    
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
        this.patient.DeletePatient(id_patient).subscribe(data=>{
          this.delpatients=data
          console.log(data)
          
        });
       
      } else if (result.isDenied) {
        //Swal.fire('Changes are not saved', '', 'info');
      //  this.route.navigate(['tirage'])
      }
    });
      
  }

}
