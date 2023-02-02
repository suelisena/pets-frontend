import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { Pets } from 'src/app/model/pets';
import { PetsService } from 'src/app/service/PetsService';


@Component({
  selector: 'app-atualizar-pets',
  templateUrl: './atualizar-pets.component.html',
  styleUrls: ['./atualizar-pets.component.css']
})
export class AtualizarPetsComponent implements OnInit {


  @ViewChild('content', { static: false }) el!: ElementRef;

  pets: Pets[] = [];

  searchText:any;
  htmlContent: any
  pipeDate: any;
  table: any;

  p: number = 1;

  id!: number;
  e!: Pets[];
  title = 'appBootstrap';
  closeResult: string = '';
  petsReload!: Observable<Pets[]>;
  pet: Pets = new Pets();
  formUpdade!: FormGroup;

  constructor( private petsService: PetsService, private router: Router,private http: HttpClient,private modalService: NgbModal,
    private toastr: ToastrService,private route: ActivatedRoute ) {this.inicializeForm();}

    ngOnInit(): void{
      this.getPets();

    }


    inicializeForm(){

      this.formUpdade = new FormGroup({
       id: new FormControl(''),
      nome: new FormControl(''),
      raca: new FormControl(''),
      especie: new FormControl(''),
      tamanho: new FormControl(''),
      idade: new FormControl(''),
      cor: new FormControl(''),
      sexo: new FormControl(''),
    })
  }

    AtualizarPet(){
      this.petsService.updatePets(this.id, this.pet).subscribe( data =>{
        console.log(data);
        this.pet = new Pets();
        this.toastr.success('A atualização do pet foi realizada com sucesso!',' Atualização de Pet',{
          timeOut: 7000,});
      }, error => console.log(error));
    }

    private getPets(){
      this.petsService.getPetsList().subscribe(data => {
        this.pets = data;
      });
    }


    onSubmit(){
      console.log(this.pets);
      this.AtualizarPet();
      this.formUpdade.reset();

    }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  key: string = 'id';
 reverse: boolean = false;

 sort(key: string){
 this.key = key;
 this.reverse = !this.reverse;
 }



}



