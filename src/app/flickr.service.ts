import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class FlickrService {
    result$: Observable<any>;
    searchStr:string="";
    API_KEY:string = 'bc39f561acb94d42e4f6745fbd8f5258'; 
    // API_KEY:string = '14994975868e510312ec4f51dfc7701a'; 
    auth_token:string ='72157687029607965-d4b12694250504c7';
    api_sig:string = '595bb74f2e95128b4b52e9fa1b034eee';
    
    secret:string = 'caef0a5bc45c84d5';
    photoset_id;
    user_id="156828599%40N08";
    uploadUrl="https://up.flickr.com/services/upload/";
    uploadphoto="";
    oauth_signature_method="HMAC-SHA1"

    userfamily = JSON.parse(localStorage.getItem("currentFamily"));

 
// http://flickr.com/services/auth/?api_key=xxx&api_sig=yyy&auth_token=zzz&method=method_name

// https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8fd2e675c10eff2b972f74b482a0180e&photoset_id=72157686697155276
// &user_id=156828599%40N08&format=json&nojsoncallback=1&auth_token=72157686759334066-816884f8b26c7f95&api_sig=5be6b7df2dfb0b20744944582decdf84
   
    constructor(private _http: Http) { };

    getPhotoSet() {
        let photosetUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + this.API_KEY + "&photoset_id=" + this.userfamily.photoSetId + "&user_id=" + this.user_id + "&per_page=48&format=json&nojsoncallback=1";
        return this._http
            .get(photosetUrl)
            .map(res => res.json())
            .map((val) => {
                if (val.stat === 'ok') {
                    return val.photoset.photo.map((photo) => {
                        return {
                            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
                            title: photo.title
                        }
                    })
                }
                else {
                    return [];
                }
            });
    
    }

     getAlbums() {
         let albumUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=" + this.API_KEY + "&user_id=" + this.user_id + "&format=json&nojsoncallback=1"
        return this._http
            .get(albumUrl)
            .map(res => res.json())
            .map((val) => {
                if (val.stat === 'ok') {
                    return val.photosets.photoset.map((photoset) => {
                        return {
                            id: photoset.id,
                            title: photoset.title._content
                
                        }
                    })
                }
                else {
                    return [];
                }
            });
    
    }

// uploadPhoto(){

// }


}

