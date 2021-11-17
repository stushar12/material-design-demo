import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from './shared.service';
import { has } from 'lodash';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
// import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'angular-material';
  page: number = 0
  results: number = 0

  userlist: Array<Users> = []


  displayedColumns: string[] = ['position', 'name', 'gender', 'email', 'image'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) matsort!: MatSort


  constructor(private http: HttpClient, private service: SharedService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      if (!has(data, 'page')) return;
      console.log(data);
      this.page = data['page']
      this.results = data['results']
      this.page = Number(this.page)
      this.results = Number(this.results)
      this.getData();
      
    })

  }

  getData(): void {
    this.service.getTables(this.page, this.results).subscribe((user: any) => {
      //console.log(user.length);

      for (let i = 0; i < this.results; i++) {
        var obj1 = {
          position: 1,
          name: "",
          gender: "",
          email: "",
          image: ""
        }
        obj1.position = i + 1;
        obj1.name =  user['results'][i]['name']['first'] + " " + user['results'][i]['name']['last']
        obj1.gender = user['results'][i]['gender'];
        obj1.email = user['results'][i]['email'];
        obj1.image = user['results'][i]['picture']['medium'];

        this.userlist.push(obj1);

      }
      this.dataSource = new MatTableDataSource(this.userlist)
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.matsort;

      // for (let i = 0; i < this.userlist.length; i++) {
      //   console.log(this.userlist[i]);
      // }
    })
  }

  applyFilter(filterVal:Event)
  {
    const value=(filterVal.target as HTMLInputElement).value; 
    this.dataSource.filter=value.trim().toLocaleLowerCase();
  }


}


export interface Users {
  position: number,
  name: string;
  gender: string,
  email: string,
  image: string,

}

