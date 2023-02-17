import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DocteursService } from '../_services/docteur/docteurs.service';
import { SpecialiteService } from '../_services/specialite/specialite.service';

@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.component.html',
  styleUrls: ['./docteur.component.scss']
})
export class DocteurComponent implements OnInit {
  docteurs: any;
  specs: any;
  delprof: any;

  constructor(private docteur:DocteursService,private spec:SpecialiteService) { }

  ngOnInit(): void {

    this.docteur.getAllProfessionnel().subscribe(data =>{
      this.docteurs=data
      console.log(data)
    
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

}
