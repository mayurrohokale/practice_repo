import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private employees = [
    {
      id: 1, name: "John Doe", 
      dep:'los angeles',
      pin: 414103,
    },
    {
      id: 2, name: "Jane Smith", 
      dep:'los angeles',
      pin: 414103,
    },
    {
      id: 3, name: "Bill Johnson", 
      dep:'los angeles',
      pin: 414103,
    },
    {
      id: 4, name: "Emily Davis", 
      dep:'los angeles',
      pin: 414103,
    }
  ];
 getEmployees()
 {
  return this.employees;
 }

 getEmployeebyID(id:number)
 {
  return this.employees.find((employee) => employee.id === id);
 }
}
