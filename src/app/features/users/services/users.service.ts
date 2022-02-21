import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPResponse } from 'src/app/core/models/HTTPResponse';
import { environment } from 'src/environments/environment';
import { AdminPrivateService } from '../../admin/services/admin-private.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private adminPrivateService:AdminPrivateService) { }
getUsers(): Observable<HTTPResponse<User[]>> {
  return this.adminPrivateService.getEntities(environment.apiEndPoint + 'api/Usuario/GetAll');
}

getUserById(id:string):Observable<HTTPResponse<User>> {   
  return this.adminPrivateService.getEntityById(environment.apiEndPoint+'api/Usuario/GetById', id);
} 


createUser(url: string,user:User): Observable<HTTPResponse<User>> {
  return this.adminPrivateService.createEntity(url+'api/Usuario/Create', user);
}

updateUser(url: string,user:User): Observable<HTTPResponse<User>> {  
  return this.adminPrivateService.updateEntity(url+'api/Usuario/Update/'+user.idUsuario, user);
}


}
