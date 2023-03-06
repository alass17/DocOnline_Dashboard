import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../_services/auth/auth.service';
import { StorageService } from '../_services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 clickrest=false
 clicknorest=false
    email:any

  isForgetpass=false
  form: any = {
    numeroOrEmail: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any = [];
  constructor(private authService: AuthService, private storageService: StorageService, private route: Router) { }

  ngOnInit(): void {
    this.roles = this.storageService.getUser().roles;
  }
  onSubmit(): void {

    
    const { numeroOrEmail, password } = this.form;

    this.authService.connexion(numeroOrEmail, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
         this.roles = this.storageService.getUser().roles;

      if(this.roles[0].includes('ROLE_ADMIN')){
       this.route.navigate(['acceuil']);
        console.log(this.roles[0])
      }else{
        console.log("Vous n'etes pas autorisé à vous connecter")
      }

       if(this.isLoggedIn = true){

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Connecter avec succès !!',
          showConfirmButton: false,
          timer: 1500
        })

       }
        
      }
      
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  onResetpassword(form:any){
    Swal.fire({
         
      icon: 'success',
      title: 'Email envoyé à votre compte',
      showConfirmButton: false,
    
    })
  const email:string=form.emails
  console.log(email)
    this.authService.reinitialisermotdepasse(email).subscribe(data =>{
      console.log(data)
      
    })
  }


  

}
