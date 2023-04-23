import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffServiceService } from '../services/staffServices/staff-service.service';
import { MatSort } from '@angular/material/sort';

// For table
export interface staff {
    name: string;
    staffId: number;
    email: string;
    position: string;
    status: string;
    action: number;
}

// const staffDetails: staff[] = [
//     { staffId: 1, name: 'Yogesh', email: 'qwe@gmail.com', position: 'Staff', status: 'Active', action: 1 },
//     { staffId: 2, name: 'Aman', email: 'abc@gmail.com', position: 'Staff', status: 'Inactive', action: 2 },
//     { staffId: 3, name: 'Ram', email: 'ram@gmail.com', position: 'Staff', status: 'Inactive', action: 2 },
//     { staffId: 4, name: 'Piyush', email: 'piy@gmail.com', position: 'Staff', status: 'Inactive', action: 2 },
//     { staffId: 5, name: 'Hrithik', email: 'hri@gmail.com', position: 'Staff', status: 'Inactive', action: 2 }
// ];

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css']
})

export class StaffComponent implements OnInit {

    // For table
    displayedColumns: string[] = ['staffId', 'name', 'email', 'position', 'status', 'action'];
    dataSource = new MatTableDataSource<any>;

    @ViewChild('paginator') paginator!: MatPaginator;
    @ViewChild(MatSort) matSort!: MatSort;

    // POSTS: any;
    
    showAllStaff:any;
    staffdata:any=[];
    // dataSource = new MatTableDataSource<staff>(this.staffdata);
    
    constructor(private staffService: StaffServiceService) {}
    
    ngOnInit() {
        this.showAll();
    }

    showAll() {
        this.staffService.showAllStaff().subscribe((data) => {
            console.log("data", data);
            this.staffdata = data;
            console.log(this.staffdata);
            this.dataSource = new MatTableDataSource(this.staffdata);
            this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.matSort;
        });
    }
    
    // showAll()
    // {
    //     this.staffService.showAllStaff().subscribe((data)=>{
    //     console.log("data", data);
    //     this.staffdata=data;
    //     console.log(this.staffdata);
    //     this.dataSource = new MatTableDataSource(this.staffdata);
    //         this.dataSource.paginator = this.paginator;
    //     });
    // }

    // showId()
    // {
    //     this.staffService.showById().subscribe((data)=>{
    //         console.log("data", data);
    //         this.staffdata=data;
    //         console.log(this.staffdata);
    //         });
    // }

    // Filter
    // private _listFilter = '';
    // get listFilter(): string {
    //     return this._listFilter;
    //     console.log(this._listFilter);
    // }

    // set listFilter(value: string) {
    //     this._listFilter = value;
    //     this.filteredstaffdata = this.performFilter(value);
    // }

    // filteredstaffdata: staff[] = [];
    // console.log(this.filteredstaffdata);
    // staffdata: staff[] = [];

    // performFilter(filterBy: string): staff[] {
    //     filterBy = filterBy.toLocaleLowerCase();
    //     return this.staffdata.filter((product: staff) =>
    //     product.name.toLocaleLowerCase().includes(filterBy));
    // }


    // performFilter(filterBy: string): staff[] {
    //     filterBy = filterBy.toLocaleLowerCase();
    //     return this.filteredstaffdata.filter((product: staff) =>
    //     product.name.toLocaleLowerCase().includes(filterBy));
    // }
    
    //gpt

// gpt

    // For panel
    panelOpenState1 = false;

    // For form
    staffForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    staffSubmitted() {
        console.log(this.staffForm.value);
    }

    get name(): FormControl {
        return this.staffForm.get('name') as FormControl;
    }

    get email(): FormControl {
        return this.staffForm.get('email') as FormControl;
    }
    // For modal
    openModel() {
        const modelDiv = document.getElementById('myModal');
        if (modelDiv != null) {
            modelDiv.style.display = 'block';
        }
    }

    CloseModel() {
        const modelDiv = document.getElementById('myModal');
        if (modelDiv != null) {
            modelDiv.style.display = 'none';
        }
    }

    
    // applyFilter(event: Event) {
    //     const filterValue = (event.target as HTMLInputElement).value;
    //     this.dataSource.filter = filterValue.trim().toLowerCase();
    // }

    filterData($event : any){
        this.dataSource.filter = $event.target.value;
    }
}