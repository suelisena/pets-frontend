import { Observable } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pets } from 'src/app/model/pets';
import { PetsService } from 'src/app/service/PetsService';

import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-listar-pets',
  templateUrl: './listar-pets.component.html',
  styleUrls: ['./listar-pets.component.css']
})
export class ListarPetsComponent implements OnInit {

  @ViewChild('content', { static: false }) el!: ElementRef;

  pets: Pets[] = [];

  searchText:any;
  htmlContent: any
  pipeDate: any;
  table: any;

  p: number = 1;


  e!: Pets[];
  title = 'appBootstrap';
  closeResult: string = '';
  petsReload!: Observable<Pets[]>;


  constructor( private petsService: PetsService, private router: Router,private http: HttpClient,private modalService: NgbModal,
    private toastr: ToastrService) {}

  ngOnInit(): void{
    this.getPets();

  }

  private getPets(){
    this.petsService.getPetsList().subscribe(data => {
      this.pets = data;
    });
  }

  reloadData() {
   let reaload = window.location.reload();
  }


  deletarPets(id: number){
   this.petsService.deletePets(id).subscribe(data => {
    console.log(data)
    this.toastr.success('A exclusão do pet foi realizada com sucesso!',' Exclusão do Pet',{
      timeOut: 7000,});
      this.reloadData();

    },

    error => console.log(error));


  }




  makePdf() {
   let pdf = new jsPDF('p','pt','a4');
   pdf.html(this.el.nativeElement,{
    callback: (pdf)=> {
      pdf.save("Lista Pets Cadastrados.pdf");
    }
   })
}

makeCSV() {

  var options = {
    fieldSeparator: '-',
    quoteStrings: '',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Lista de Pets Cadastrados',
    useBom: true,
    noDownload: false,
    headers: ["Nome","Idade","Sexo","Espécie","Raça","Tamanho","Cor"]
  };
  new ngxCsv(this.pets, "Lista de Pets", options);
}

 key: string = 'id';
 reverse: boolean = false;

 sort(key: string){
 this.key = key;
 this.reverse = !this.reverse;
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



}
