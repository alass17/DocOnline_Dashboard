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
  p:number=1

  constructor(private patient:PatientService) { }

  ngOnInit(): void {
    this.getAllPatient()

  
  }

  popDeletePatient(id_patient:number){
   

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Etes vous sûre?',
        text: "Vous ne pourrez pas revenir en arrière !",
        imageUrl:'../../assets/img/38213-error.gif',
      imageWidth:'  250px',
      imageHeight:'250px',
        showCancelButton: true,
        confirmButtonText: 'Supprimer',
        cancelButtonText: 'Annuler',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.patient.DeletePatient(id_patient).subscribe(data=>{
            this.delpatients=data
            console.log(data)

            this.getAllPatient()
          })
          swalWithBootstrapButtons.fire(
            'Supprimer!',
            'Patient supprimé avec succès.',
            'success'
          )

          this.getAllPatient()
        // } else if (
        //   /* Read more about handling dismissals below */
        //   result.dismiss === Swal.DismissReason.cancel
        // ) {
        //   swalWithBootstrapButtons.fire(
        //     'Cancelled',
        //     'Your imaginary file is safe :)',
        //     'error'
        //   )**
          }
      })


    }


    getAllPatient(){
      this.patient.getAllPatient().subscribe(data =>{
        this.patients=data
      })
    }
}
