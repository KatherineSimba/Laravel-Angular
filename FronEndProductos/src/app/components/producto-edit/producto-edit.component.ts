import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/producto';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
  id:any;
  data:any;
  producto = new Producto();

  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id)
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.dataService.getProductoById(this.id).subscribe(res =>{
      //console.log(res);
      this.data = res;
      this.producto = this.data;
    })

  }

 updateProducto(){
   this.dataService.updateData(this.id, this.producto).subscribe(res =>{

   })
 }

}
