import { PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RendezVous } from './Classes/rendez-vous/rendez-vous';
import { DetailsPatientsComponent } from './details-patients/details-patients.component';
import { DetailsRendezvousComponent } from './details-rendezvous/details-rendezvous.component';
import { DetailsprofessionnelComponent } from './detailsprofessionnel/detailsprofessionnel.component';
import { DocteurComponent } from './docteur/docteur.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProfilComponent } from './profil/profil.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PrincipalComponent,
  children: [
 { path: 'acceuil', component: AcceuilComponent },
 { path: 'patient', component: PatientComponent },
 { path: 'docteur', component: DocteurComponent },
 { path: 'rendezvous', component: RendezvousComponent },
 { path: 'profil', component: ProfilComponent },
 { path: 'detailsprofessionnel/:id', component:DetailsprofessionnelComponent },
 { path: 'details-patients/:id', component:DetailsPatientsComponent },
 { path: 'details-rendezvous/:id', component:DetailsRendezvousComponent },


]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
