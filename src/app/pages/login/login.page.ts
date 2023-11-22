import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //initialisation du formulaire
  formulaireLogin!: FormGroup;

  constructor(private router: Router, private formbuilder: FormBuilder) { }


  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formulaireLogin = this.formbuilder.group({
      login: ['', Validators.required], //champs login obligatoire
      password: ['', Validators.required] //champ password obligatoire
    })
  }

  login(){
    console.log(this.formulaireLogin.value);

    if(this.formulaireLogin.value.login == 'admin' && this.formulaireLogin.value.password =='password'){

      this.router.navigateByUrl('start/tabs/tab1')
    }
    else{
      alert('error');
    }
  }
}
