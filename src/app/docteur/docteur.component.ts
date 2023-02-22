import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { SpecialiteService } from '../_services/specialite/specialite.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { RendezVousService } from '../_services/rendez-vous/rendez-vous.service';
@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.component.html',
  styleUrls: ['./docteur.component.scss']
})
export class DocteurComponent implements OnInit {
  docteurs: any;
  specs: any;
  delprof: any;
  p:number=1
  // itemsPerpage:number=5
  totaldocteurs: any;
  objet: any;
  form: any={
    libelle:null
  };
  specialites: any;

  constructor(private docteur:DocteursService,private spec:SpecialiteService,
    private rendezvousService:RendezVousService) { }

  ngOnInit(): void {

    this.docteur.getAllProfessionnel().subscribe(data =>{
      this.docteurs=data
      console.log(data)
    this.totaldocteurs=data.length
    })
    this.spec.getAllSpecialite().subscribe(data =>{
      this.specs=data
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
        this.docteur.DeleteProf(id_patient).subscribe(data=>{
          this.delprof=data
          console.log(data)
          
        });
       
      } else if (result.isDenied) {
        //Swal.fire('Changes are not saved', '', 'info');
      //  this.route.navigate(['tirage'])
      }
    });
      
  }

  onSubmit(){
    this.spec.AjouterSpecialite(this.form.libelle).subscribe(data=>{
      this.specialites=data;
    })
  }


  PopupSupprimer(id_patient:number){

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
      // icon: 'warning',

      imageUrl:'../../assets/img/38213-error.gif',
      imageWidth:'  250px',
      imageHeight:'250px',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.docteur.DeleteProf(id_patient).subscribe(data=>{
          this.delprof=data
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
      //   )

      }

     
    })


  }



  reload(){
    window.location.reload()
  }
}
