import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  template: `
   <div>
      <label>Encuentra el auto que estas buscando!:</label>
      <select (change)="onfiltrarVehiculos($event)">
        <option value="todos">Todos</option>
        <option value="usados">Usados</option>
        <option value="0km">0KM</option>
        
      </select>
    </div>
  `
})
export class FiltroComponent {
  @Output() filtrarVehiculos = new EventEmitter<string>();

  
  
  onfiltrarVehiculos(event: any) {
    const tipo = event.target?.value;
    console.log(event.target.value,"opcion de filtrado")
    if (tipo) {
      this.filtrarVehiculos.emit(tipo);
    }
  }
}