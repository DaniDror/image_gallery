import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  imageId: string;
  imageUrl: string;
  photo: any;
  isReady: boolean = false;


  constructor(
    private _imageService : ImageService,
    private activatedRoute: ActivatedRoute,
    private _location: Location) { }

  getSearchQuery() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.imageId = params['id'];
        this.getImageInfo();
      });
  }

  getImageInfo() {
    return this._imageService.getImageInfo(this.imageId).subscribe(
       data => this.getImageURL(data),
       error => console.log(error)
    );
  }

  getImageURL(data) {
    this.photo = data.photo;
    let farm = this.photo.farm;
    let secret = this.photo.secret;
    let server = this.photo.server;

    this.imageUrl = 'http://farm' + farm +
    '.staticflickr.com/' + server +
    '/' + this.imageId + '_' + secret + '.jpg';

    this.isReady = true;
  }

  goBack() {
    this._location.back();
  }

  ngOnInit() {
    this.getSearchQuery();
  }

}
