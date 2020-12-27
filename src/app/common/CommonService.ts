import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, of, Observer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs/Rx';

@Injectable({
    providedIn: 'root',
})

export class CommonService {
    public config = {};
    public userData: any = {};
    public loading: any;

    constructor(
        public http: HttpClient,
        private _toastr: ToastrService,
        public router: Router,
        public spinner: NgxSpinnerService,
    
    ) { }

    private prepareFormDataHeader(headers: HttpHeaders | null): object {
        headers = headers || new HttpHeaders();
        headers = headers.set('accept', '*/*');
        //headers = headers.set('Content-Type', 'multipart/form-data');
        return {
            headers: headers
        }
    }

    postFormData(url: string, body: any, headers?: HttpHeaders | null): Observable<any> {
        const expandedHeaders = this.prepareFormDataHeader(headers);
       
        return this.http.post(url, body, expandedHeaders);
    }

}