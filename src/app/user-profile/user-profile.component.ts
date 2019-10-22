import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfileForm: FormGroup;
  constructor( private formBuilder: FormBuilder, private Router: Router) { 
   
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

 
}
