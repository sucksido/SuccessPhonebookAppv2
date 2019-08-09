import {Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  surname: string;
  phone: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Success', surname: 'Xivambu', phone: '0813009090'  },
  { id: 2, name: 'Nhlanhla', surname: 'Baloyi', phone: '0725487896'},
  { id: 3, name: 'Ntsako', surname: 'Mathevula', phone: '0725465621'},
  { id: 4, name: 'Hlawuleka', surname: 'Masw', phone: '0745598180' },
  { id: 5, name: 'Baldwin', surname: 'Khosa', phone: '0845698574'  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'SuccessPhonebookApp';
  displayedColumns: string[] = ['id', 'name', 'surname', 'phone'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}


