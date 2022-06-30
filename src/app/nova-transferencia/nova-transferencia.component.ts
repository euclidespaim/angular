import { Transferencia } from './../models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-nova-transferencia",
  templateUrl: "./nova-transferencia.component.html",
  styleUrls: ["./nova-transferencia.component.scss"]

})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService) {


  }

  transferir() {
    console.log('Solicitada nova transferência!');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    };

    this.service.adicionar(valorEmitir).subscribe({
      next: (resultado: any) => console.log(resultado),
      error: (erro) => console.log(erro),
      complete: () => this.limparCampos()
      });
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
