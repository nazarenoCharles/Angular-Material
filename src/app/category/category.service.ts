import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string ="https://localhost:5001/api/categories";
  private updateUrl: string = "https://localhost:5001/api/categories/";
  constructor(private http: HttpClient) { }
  
    addCategories(category: any): Observable<any[]> {
    return this.http.post<any[]>(this.url, category).pipe(
      catchError(this.errorHandler));
  }
  deleteCategories(id:any):Observable<any[]>{
    return this.http.delete<any[]>(this.updateUrl + id).pipe(
      catchError(this.errorHandler)
    );
  }
  getCategories(): Observable<any[]>{
    return this.http.get<any[]>(this.url).pipe(
      catchError(this.errorHandler));
    
  }
  errorHandler(error: HttpErrorResponse){ 
    return throwError(error.message || "Server Error")
  }
  
}
