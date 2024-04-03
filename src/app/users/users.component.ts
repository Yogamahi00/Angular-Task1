import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  allUsers: any[] = [];
  fetchedUsers: any[] = [];
  currentPage = 1;
  pageSize = 20;
  filterString: string = '';
  selectedDomain: string | null = null;
  selectedGender: string | null = null;
  selectedAvailability: boolean | null = null;
  allDomains: string[] = [];
  selectedUsers: any[] = [];
  team: any[] = [];

  constructor(private userService: UsersService,private router:Router) { }

  allUsersLength = Math.round(this.userService.getAllUsersLength()/20);


  ngOnInit(): void {
    this.fetchUsers();
    this.allDomains = this.userService.getAllDomains();
  }
 
  fetchUsers(): void {
    this.allUsers = this.userService.getAllUsers(this.currentPage, this.pageSize);
    this.fetchedUsers = [...this.allUsers];
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchUsers();
  }

  SearchUser(){
    this.fetchedUsers =  this.userService.fetchUser(this.filterString.toLowerCase())
  }

  filterUsers(): void {
    this.fetchedUsers = this.userService.filterUsers(this.selectedDomain,this.selectedGender,this.selectedAvailability);
  }



  updateDomainFilter(event: Event): void {
    const value = (event.target as HTMLSelectElement)?.value;
    if (value) {
      this.selectedDomain = value;
      this.filterUsers();
    }
  }

  updateGenderFilter(event: Event): void {
    const value = (event.target as HTMLSelectElement)?.value;
    if (value) {
      this.selectedGender = value;
      this.filterUsers();
    }
    
  }

  updateAvailabilityFilter(event: Event): void {
    const value = (event.target as HTMLSelectElement)?.value;
    if (value === '') {
      this.selectedAvailability = null;
    } else if (value === 'true') {
      this.selectedAvailability = true;
    } else if (value === 'false') {
      this.selectedAvailability = false;
    }
    this.filterUsers();
  }
  
  selectUser(user: any): void {
    const existingUserIndex = this.selectedUsers.findIndex(u => u.domain === user.domain);
    if (existingUserIndex === -1 || user.available) {
        this.selectedUsers.push(user);
    }
  }

  createTeam(): void {
    this.team = this.selectedUsers;
    console.log('Team created with selected users:', this.team);
  }
  
  
  


}
