import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Producto } from 'src/app/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any;
  producto = new Producto();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getProductosData();
  }

  getProductosData(){
    this.dataService.getData().subscribe(res => {
      this.productos = res;
    });

  }

  insertData(){
    this.dataService.insertData(this.producto).subscribe(res =>{
      this.getProductosData();
    })
  }
  

  deleteData(id){
    this.dataService.deleteData(id).subscribe(res =>{
      this.getProductosData();
    })

  }
}
