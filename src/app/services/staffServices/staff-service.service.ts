import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class StaffServiceService {
    
    url = "http://localhost:63832/"

    constructor(private Http: HttpClient) { }

    showAllStaff() {
        return this.Http.get(this.url + "ShowAllUsers");
    }

    showById() {
        return this.Http.get(this.url + "ActiveUserById" + "userId");
    }
    // addStaff() {
    //     return this.Http.post(this.url + "AddNewUser" )
    // }
}


