import {Component, OnInit} from '@angular/core';
import {Utilizador} from "../../entity/Utilizador";
import {UtilizadorService} from "../../services/utilizador/utilizador.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  constructor(private userService:UtilizadorService,
              private route:Router,
              private fb:FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })

    if(this.userService.isLoggedIn())
      this.route.navigate(['']);
  }

  mostrarErros(){
    alert('Erro nas credenciais');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let user:Utilizador= new Utilizador(0,
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value);

      this.userService.login(user).subscribe(response=>{
        if(response){
          this.userService.saveUsername(user.username);
          this.route.navigate(['dashboard']).then(() => {
            // Forçar um reload da página
            window.location.reload();
          });
        }
      }, error=>{
        alert('Erro, username ou password inválidos!')
      });

    }
  }
}
