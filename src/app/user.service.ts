import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    private baseUrl = 'https://cors-anywhere.herokuapp.com/https://familyreserve.herokuapp.com/api/'
    private baseloginUrl = 'https://cors-anywhere.herokuapp.com/https://familyreserve.herokuapp.com/'

    constructor (private http: Http) {}


    addPeople(endpoint: string, record:object): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}`;
        // console.log(apiUrl)
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addRecord(endpoint: string, record:object): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}`;
        // console.log(apiUrl)
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getlogin(endpoint: string, record:object): Observable<any> {
        let apiUrl = `${this.baseloginUrl}${endpoint}`;

        return this.http.post(apiUrl, record)
            .map(this.extractData); 
    }
    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getRecords(endpoint: string): Observable<any[]> {
        let apiUrl = `${this.baseUrl}${endpoint}`;
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getRecord(endpoint: string, id): Observable<any> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        // console.log(apiUrl)
        return this.http.get(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    editRecord(endpoint: string, record:object): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}`;
        // console.log(record)
        // console.log(apiUrl)
        this.clean(record)
        // console.log(record)
        return this.http.put(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    }
     clean(obj) {
        for (var propName in obj) {
            if (obj[propName] === '') {
                obj[propName] = null;
            }
        }
    }

    putFamily(endpoint: string, record:object, id:number): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        // console.log(record)
        // console.log(apiUrl)
        this.clean(record)
        // console.log(record)
        return this.http.put(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);
    }


    addAddress(endpoint: string, record:object): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}`;
        // console.log(apiUrl)
        return this.http.post(apiUrl, record)
            .map(this.extractData)
            .catch(this.handleError);

    }
     addPost(endpoint: string, content:string, familyID:number, userID:number): Observable<object> {
        let post = {
            content: content,
            family: { id: familyID },
            postedBy: { id: userID }
        }
        let apiUrl = `${this.baseUrl}${endpoint}`;
        // console.log(apiUrl)
        return this.http.post(apiUrl, post)
            .map(this.extractData)
            .catch(this.handleError);

    }

    private extractData(res: Response) {
        let results = false;
        try{
            results = res.json();
        }catch(e){
            if(res.status !== 200){
                Observable.throw(e)
            }
        }
        return results || [];
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if(typeof error._body === "string"){
            errMsg = error._body
        }else{
            if (error instanceof Response) {
                if(error.status === 0){
                    errMsg = "Error connecting to API"
                }else{
                    const errorJSON = error.json();
                    errMsg = errorJSON.message;
                } 
            }
        }
        
        return Observable.throw(errMsg);
    }

    deleteRecord(endpoint: string, id:number): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        return this.http.delete(apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

}