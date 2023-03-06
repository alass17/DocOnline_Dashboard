import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: any;
  monStatus: any;
constructor(private authService:AuthService,private storageService:StorageService,private route:Router){}

ngOnInit() {
  this.user = this.storageService.getUser();
  if(this.user.id != null ){
   console.log(this.user.statusUser.idstatus)
   this.monStatus = this.user.statusUser.idstatus
  }

}
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.route.navigate(['/login'])
      },
      error: err => {
        console.log(err);
      }
    });
    
  }
  
}
