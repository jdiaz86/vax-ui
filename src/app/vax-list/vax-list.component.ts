import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface Employee {
  dui: string;
  last_name: string;
  name: string;
  email: string;
  actions: string;
  state: string;
  type: string;
  date: string;
}

const ELEMENT_DATA: Employee[] = [
  {dui: '1', last_name: 'Hydrogen', name: '1.0079', email: 'H', state: 'hi', type: 'AstraZeneca', date: 'May 12, 2021', actions: ''},
  {dui: '2', last_name: 'Helium', name: '4.0026', email: 'He', state: 'hi', type: 'AstraZeneca', date: 'May 12, 2021', actions: ''},
  {dui: '3', last_name: 'Lithium', name: '6.941', email: 'Li', state: 'hi', type: 'AstraZeneca', date: 'May 12, 2021', actions: ''},
  {dui: '4', last_name: 'Beryllium', name: '9.0122', email: 'Be', state: 'hi', type: 'AstraZeneca', date: 'May 12, 2021', actions: ''},
  {dui: '5', last_name: 'Boron', name: '10.811', email: 'B', state: 'hi', type: 'AstraZeneca', date: 'May 12, 2021', actions: ''},
  {dui: '6', last_name: 'Carbon', name: '12.010', email: 'C', state: 'hi', type: 'AstraZeneca', date: 'May 12, 2021', actions: ''},
  {dui: '7', last_name: 'Nitrogen', name: '14.006', email: 'N', state: 'hi', type: 'AstraZeneca', date: 'May 12, 2021', actions: ''},
  {dui: '8', last_name: 'Oxygen', name: '15.999', email: 'O', state: 'hi', type: 'AstraZeneca', date: 'May 12, 2021', actions: ''},
  {dui: '9', last_name: 'Fluorine', name: '18.998', email: 'F', state: 'hi', type: 'AstraZeneca', date: 'May 12, 2021', actions: ''},
  {dui: '1', last_name: 'Neon', name: '20.179', email: 'Ne', state: 'hi', type: 'AstraZeneca', date: 'May 12, 2021', actions: ''},
];

@Component({
  selector: 'app-vax-list',
  templateUrl: './vax-list.component.html',
  styleUrls: ['./vax-list.component.scss']
})
export class VaxListComponent implements OnInit {

  showFilters: boolean = false;

  displayedColumns: string[] = ['dui', 'last_name', 'name', 'email', 'state', 'type', 'date', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

  itemClicked(row: Employee) {
    console.log(row);
  }

  edit(row: Employee) {
    console.log(row);
  }

  remove(row: Employee) {
    console.log(row);
  }

}
