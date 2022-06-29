import { Component } from "@angular/core";

@Component({
  selector: "app-nova-transferencia",
  templateUrl: "./nova-transferencia.component.html",
  styleUrls: ["./nova-transferencia.component.scss"]

})
export class NovaTranferenciaComponent {

  valor: number = 0;
  destino: number = 0;

  transferir() {
    console.log('Solicitar nova tranferência!');
    console.log('Valor: ' + this.valor);
    console.log('Valor: ' + this.destino);

  }

}
