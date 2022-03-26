import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  public loadingList: boolean = true;
  public users: User[] = [];
  constructor(private usersService: UsersService) {}
  loadList() {
    this.usersService.getUsers().subscribe({
      next: (resp) => { (this.users = resp.result)
        this.loadingList = false;
      },
      error: (error) => {
        console.log('Error al obtener los usuarios');
      },
    });
  }
  ngOnInit() {
    this.loadList();
  }
}
