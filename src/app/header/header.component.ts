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
@Output() toogleSidebarForMe:EventEmitter<any>=new EventEmitter();
  constructor(private authService:AuthService,private storageService:StorageService,private route:Router
) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toogleSidebarForMe.emit();
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
