import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DocteurComponent } from './docteur/docteur.component';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { PatientComponent } from './patient/patient.component';
import { LoginComponent } from './login/login.component';

import { LineChartComponent } from './line-chart/line-chart.component';
import { ProfilComponent } from './profil/profil.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetailsprofessionnelComponent } from './detailsprofessionnel/detailsprofessionnel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsPatientsComponent } from './details-patients/details-patients.component';
import { DetailsRendezvousComponent } from './details-rendezvous/details-rendezvous.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AcceuilComponent,
    DocteurComponent,
    HeaderComponent,
    PatientComponent,
    LoginComponent,
    LineChartComponent,
         ProfilComponent,
         RendezvousComponent,
         PrincipalComponent,
         DetailsprofessionnelComponent,
         DetailsPatientsComponent,
         DetailsRendezvousComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

     // * MATERIAL IMPORTS
     MatSidenavModule,
     MatToolbarModule,
     MatMenuModule,
     MatIconModule,
     MatDividerModule,
     MatListModule,
     FormsModule,
     HttpClientModule,
    NgxPaginationModule,
     FormsModule,
   

     
    //  PopoverController
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
