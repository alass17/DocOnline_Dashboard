  import { outputAst } from '@angular/compiler';
import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  user: any;
  // monStatus: any;
  constructor(private authService:AuthService,private storageService:StorageService,private route:Router
) { }

  ngOnInit() {
    this.user = this.storageService.getUser();
    // if(this.user.id != null ){
    //  console.log(this.user.statusUser.idstatus)
    //  this.monStatus = this.user.statusUser.idstatus
    // }
  
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  // logout(): void {
  //   this.tokenStorage.signOut();
  //       // this.router.navigateByUrl('bottom-bar/accueil')
  //   window.location.reload();
  // }

  // toggleSidebar(){
  //   this.toogleSidebarForMe.emit();
  // }


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
