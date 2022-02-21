import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  action: string="Nuevo usuario";
  alertMessage:string="El usario ha sido creado correctamente";  

  constructor(private _formBuilder:FormBuilder,private route: ActivatedRoute,private usersService: UsersService) {
    this.userForm=this._formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],   
    });
   }


   haveErrorsFormField(campo:string){
    return this.userForm.get(campo)!.hasError('required') && this.userForm.get(campo)!.touched;
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
