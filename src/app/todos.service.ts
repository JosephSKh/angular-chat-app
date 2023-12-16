import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TODO } from './todo.model';

@Injectable({providedIn: 'root'})

export class TODOsService {
    constructor(private httpClient: HttpClient) { }
    
    getTODOS(id: number): Observable<TODO> {
        return this.httpClient.get<TODO>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
}