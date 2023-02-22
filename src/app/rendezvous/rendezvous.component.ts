import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RendezVousService } from '../_services/rendez-vous/rendez-vous.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.scss']
})
export class RendezvousComponent implements OnInit {
  touslesrdvs: any;
  p:number=1
  delrdv: any;

  form:any={
    libelle:null
  }
  objet: any;
  constructor(private rendezvous:RendezVousService) { }

  ngOnInit(): void {
this.rendezvous.getAllRendezVous().subscribe(data=>{
  console.log(this.touslesrdvs)
  this.touslesrdvs=data
})

  }

    
    popDeleterdv(idrdv:number){
    
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
          this.rendezvous.supprimerRendezVous(idrdv).subscribe(data=>{
            this.delrdv=data
            console.log(data)
          })
          swalWithBootstrapButtons.fire(
            'Supprimer!',
            'Votre fichier a été supprimé avec succès.',
            'success'
          )
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

  onSubmit(){
    this.rendezvous.AjouterObjetRdv(this.form.libelle).subscribe(data=>{
      this.objet=data;
    })
  }

}
