import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
  private PROXY = environment.PROXY_URL;
  private FLICKR_GET_PUBLIC_FEED = environment.PROXY_URL +
                                    environment.FLICKR_API_URL +
                                    environment.FLICKR_API_PUBLIC +
                                    environment.FLICKR_FORMAT;

  private FLICKR_GET_IMAGE_INFO = environment.FLICKR_API_URL +
                                  environment.FLICKR_API_INFO +
                                  '&api_key=' + environment.FLICKR_API_KEY+
                                  '&' + environment.FLICKR_FORMAT;

  constructor(private _http: Http){ }

  getImage(query){
    return this._http.get(this.FLICKR_GET_PUBLIC_FEED + "&tags=" + query).map(res => res.json());
  }

  getImageInfo(id) {
    return this._http.get(this.FLICKR_GET_IMAGE_INFO + "&photo_id=" + id).map(res => res.json());
  }
}
