import { Component } from '@angular/core';

interface Vehiculo {
  id: any;
  marca: string;
  modelo: string;
  tipo: string;
  estado: string;
  
}

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']  
  
   
  
})
 
export class ListaVehiculosComponent {
  vehiculos: Vehiculo[] = [
    { id: 1, marca: 'Ford', modelo: 'Focus', tipo: 'usados', estado: 'Excelente',  },
    { id: 2, marca: 'Toyota', modelo: 'Corolla', tipo: '0km', estado: 'Nuevo',  },
    { id: 3, marca: 'Chevrolet', modelo: 'Prisma', tipo: '0km', estado: 'Impecable, no vuelteros',  },
    { id: 4, marca: 'Nissan', modelo: '350 Z', tipo: 'usados', estado: 'Casi nuevo',  },
    { id: 5, marca: 'Toyota', modelo: 'Etios', tipo: '0km', estado: 'Nuevo',  },
    { id: 6, marca: 'Chevrolet', modelo: 'Celta', tipo: 'usados', estado: 'Nuevo',  },
    { id: 7, marca: 'Renault', modelo: 'Megane', tipo: 'usados', estado: 'Nuevo',  },
    { id: 8, marca: 'Volkswagen ', modelo: 'Sirocco', tipo: '0km', estado: 'Perfecto',  },
  ];

  vehiculosOriginales: Vehiculo[] = [...this.vehiculos];
  filtroSeleccionado: string | null = null;
  
  nuevoAuto: Vehiculo = {id: '',marca: '', modelo: '', tipo: '', estado:''};
  filtrarVehiculos(tipo: string) {
    this.filtroSeleccionado = tipo;
    if (tipo === 'todos') {
      this.vehiculos = [...this.vehiculosOriginales]; // Restaurar el arreglo original
    } else {
      this.vehiculos = this.vehiculosOriginales.filter(vehiculo => vehiculo.tipo === tipo);
    }
  }
 
  agregarAuto() {
    this.vehiculos.push(this.nuevoAuto);
    this.nuevoAuto = { id: 0, marca: '', modelo: '', tipo: '', estado: '' };
    
  }
  

  eliminarVehiculo(vehiculo: Vehiculo) {
    const index = this.vehiculos.findIndex(v => v.id === vehiculo.id);
    if (index !== -1) {
      this.vehiculos.splice(index, 1);
    }
  }
}
 
  

  

  
    


  


  
  


