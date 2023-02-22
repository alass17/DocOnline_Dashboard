import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezVousService } from '../_services/rendez-vous/rendez-vous.service';

@Component({
  selector: 'app-details-rendezvous',
  templateUrl: './details-rendezvous.component.html',
  styleUrls: ['./details-rendezvous.component.scss']
})
export class DetailsRendezvousComponent implements OnInit {
  rdv: any;
  id: any;

  constructor(private rdvService:RendezVousService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    
    this.rdvService.TrouverRendezVousParId(this.id).subscribe(data=>{
      console.log(data)
      this.rdv=data
    })
  }

}
