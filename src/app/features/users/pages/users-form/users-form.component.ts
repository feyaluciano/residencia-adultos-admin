import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HTTPResponse } from 'src/app/core/models/HTTPResponse';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  userForm!:FormGroup;

  public user!:User;
  editing: boolean=false;
  sending: boolean=false;
  action: string="Nuevo usuario";
  alertMessage:string="El usario ha sido creado correctamente";  

  constructor(private _formBuilder:FormBuilder,private route: ActivatedRoute,private usersService: UsersService,private router: Router) {
    this.userForm=this._formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],   
    });
   }


   haveErrorsFormField(campo:string){
    return this.userForm.get(campo)!.hasError('required') && this.userForm.get(campo)!.touched;
  }



  save() {
    if (this.userForm.valid ) {
     // this.allowSend     = true;
      this.sending = true;      
       this.user = {
        idUsuario:this.user.idUsuario, 
        nombre: this.userForm.get("nombre")?.value,
        apellido: this.userForm.get("apellido")?.value,
        email: this.userForm.get("email")?.value,         
       };
      if (this.editing) {        
        this.user.idUsuario = this.user.idUsuario;        
        const url: string =environment.apiEndPoint;  
        let req:Observable<HTTPResponse<User>>= this.usersService.updateUser(url,this.user);         
        req.subscribe((response) => {
          let responseApi:HTTPResponse<User>=JSON.parse(JSON.stringify(response));         
          if (responseApi.isSuccess===true){
            alert(this.alertMessage);
            this.router.navigate(["admin/users"]);
          }    
        });               
      } else {                   
        this.user.idUsuario = 0;        
        const url: string =environment.apiEndPoint;
        const req:Observable<HTTPResponse<User>>= this.usersService.createUser(url,this.user);
        req.subscribe((response) => {
          let responseApi:HTTPResponse<User>=JSON.parse(JSON.stringify(response));         
          if (responseApi.isSuccess===true){
            alert(this.alertMessage);
            this.router.navigate(["admin/users"]);
          }    
        });          
      }
    } else {      
      this.sending = false;
      this.userForm.markAllAsTouched();
      this.alertMessage = "Por favor complete los campos requeridos";
      //Swal.fire(this.alertMessage.toString()).then(() => {});
    }
  }




  ngOnInit() {
    if (typeof this.route.snapshot.params['IdUser'] !== 'undefined') {        
      this.editing=true;
      this.action="Editar usuario";
      this.alertMessage="El usuario ha sido actualizado correctamente";           
      this.user = { idUsuario: this.route.snapshot.params['IdUser'],nombre:"",apellido:"",email:"",activo:true };  
      this.usersService.getUserById(this.route.snapshot.params['IdUser']).subscribe({
        next: (resp) => { 
          this.user = resp.result;
          this.user=JSON.parse(JSON.stringify(resp.result));
          this.userForm.patchValue(this.user);                  
        },
        error: (error) => {
          console.log('Error al obtener el usuario');
        },
      });
                  
    }  else { 
         
      this.editing=false;      
      this.user = { idUsuario: 0,nombre:"",apellido:"",email:"",activo:true };           
    }  



  }
}
