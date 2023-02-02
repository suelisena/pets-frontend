import { PetsService } from 'src/app/service/PetsService';
import { Component, OnInit } from '@angular/core';
import { Pets } from 'src/app/model/pets';
import { Route, Router } from '@angular/router';
import { FormGroup,ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-cadastrar-pets',
  templateUrl: './cadastrar-pets.component.html',
  styleUrls: ['./cadastrar-pets.component.css']
})
export class CadastrarPetsComponent implements OnInit{

  pets: Pets = new Pets();
  formulario!: FormGroup;
  mensagem = "";

  constructor(private PetsService: PetsService, private router: Router,private toastr: ToastrService){
    this.inicializeForm();
  }

   inicializeForm(){

    this.formulario = new FormGroup({
    nome: new FormControl(''),
    raca: new FormControl(''),
    especie: new FormControl(''),
    tamanho: new FormControl(''),
    idade: new FormControl(''),
    cor: new FormControl(''),
    sexo: new FormControl(''),
  })
}



  ngOnInit(): void {

  }

  errorMessage(){
    this.toastr.error('Cadastro do pet  '+ this.pets.nome +'  não foi realizado com sucesso!',' Erro Cadastro',{
      timeOut: 7000,
    });
  }

  salvarPets(){
    this.PetsService.createPets(this.pets).subscribe(data =>{
      console.log(data);
      if(data != null){
        this.toastr.success('Cadastro do pet  realizado com sucesso!',' Pet Cadastrado',{
          timeOut: 5000,});
        }
    },
     error => {
      console.log(error);
      if(error.error) {
        this.toastr.error('Cadastro do pet  não foi realizado com sucesso!',' Erro de Cadastro',{
          timeOut: 5000,});
      }
    });
  }

  goToPetsList(){
    this.router.navigate(['/ListarPets']);
  }

  onSubmit(){
    console.log(this.pets);
    this.salvarPets();
    this.formulario.reset();

  }


}
