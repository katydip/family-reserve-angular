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
    // API_KEY:string = 'bc39f561acb94d42e4f6745fbd8f5258'; 
    // API_KEY:string = 'd07b16ad52f827ad2b2d3f00964eaa88'; //given in url for userId.. 
    // API_KEY:string = 'ffe789782fca60a2b4190b31a2e71278'; 
    API_KEY:string = '2f64d74fdbcceaac432cd9f7a82517e5'; //7/27
    // 2f64d74fdbcceaac432cd9f7a82517e5

    //need to do this- https://www.flickr.com/services/api/auth.oauth.html

    secret:string = 'caef0a5bc45c84d5';
    photoset_id;
    user_id="156828599%40N08";
    uploadUrl="https://up.flickr.com/services/upload/";
    uploadphoto="";

    userfamily = JSON.parse(localStorage.getItem("currentFamily"));

// https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8fd2e675c10eff2b972f74b482a0180e&photoset_id=72157686697155276
// &user_id=156828599%40N08&format=json&nojsoncallback=1&auth_token=72157686759334066-816884f8b26c7f95&api_sig=5be6b7df2dfb0b20744944582decdf84
   
//    https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=8fd2e675c10eff2b972f74b482a0180e&photoset_id=72157686697155276
//    &user_id=156828599%40N08&format=json&nojsoncallback=1
   
    constructor(private _http: Http) { };

    getPhotoSet() {
        let photosetUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=" + this.API_KEY + "&photoset_id=" + this.userfamily.photoSetId + "&user_id=" + this.user_id + "&per_page=12&format=json&nojsoncallback=1";
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

uploadPhoto(){

}


}

//ideas... 
// api({
//   method: 'upload',
//   title: 'Christmas morning',
//   description: "Christmas at home!",
//   is_public: 0,
//   is_friend: 1,
//   is_family: 1,
//   hidden: 2,
//   photo: fs.createReadStream(fullpath)
// }, function(err, response) {
//   if (err) {
//     console.error('Could not upload photo:', err);
//   }
//   else {
//     var new_photo_id = response.photoid._content;
//     // usually, the method name is precisely the name of the API method, as they are here: 
//     api({method: 'flickr.photos.getInfo', photo_id: new_photo_id}, function(err, response) {
//       console.log('Full photo info:', response);
//       api({method: 'flickr.photosets.addPhoto', photoset_id: 72157683717828503, photo_id: new_photo_id}, function(err, response) {
//         console.log('Added photo to photoset:', response);
//       });
//     });
//   }
// });
