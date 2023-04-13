import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = "http://localhost:3000/employees"

  constructor(private http: HttpClient) { }


  save(data:any){
    return this.http.post(this.url,data);
  }

  getAll(){
    return this.http.get(this.url);
  }

  getById(id: number){
    return this.http.get(this.url+"/"+id);
  }
  update(id: number, data:any){
    return this.http.put(this.url+"/"+id, data);
  }
  delete(id: number){
    return this.http.delete(this.url+"/"+id);
  }
}
