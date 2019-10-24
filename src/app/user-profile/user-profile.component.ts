import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfileService } from '../user-profile.service';
import { post } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile: object = {};
  isEditing: boolean = false;
  userProfileForm: FormGroup;
  constructor( private UserProfileService: UserProfileService, private formBuilder: FormBuilder, private Router: Router) { 
   
  }

  ngOnInit() {
    this.userProfileForm = this.formBuilder.group({
      firstName: "George",
      lastName: "Job",
      birthday: "January 1, 1987",
      homeAddress: "4001 Sunset Lane",
      favFood: "Pizza",
      favMovie: "Star Wars",
      favArtist: "1000 Monkeys",
      hobbies: "TV"
    });
  }

    onSubmit(){
      this.UserProfileService.post(this.userProfileForm.value).subscribe(console.log); 
    }
  
    toggle(){
      this.isEditing = !this.isEditing;
    }

 
}
