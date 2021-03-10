import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/products');
  }
  insertData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/product', data);
  }

  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/product/' +id);
  }

  getProductoById(id){

    return this.httpClient.get('http://127.0.0.1:8000/api/product/' +id);
  }

  updateData(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/product/'+id, data);

  }
}
