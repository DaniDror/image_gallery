import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {
  images: any[];
  searchQuery: string;
  isReady: boolean = false;

  constructor(
    private _imageService : ImageService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  getSearchQuery() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.searchQuery = params['tag'];
        this.searchImages();
      });
  }

  searchImages() {
    return this._imageService.getImage(this.searchQuery).subscribe(
       data => this.getImageArray(data),
       error => console.log(error)
    );
  }

  getImageArray(data) {
    this.isReady = true;
    console.log(data);
    this.images = data.items
  }

  searchAgain(searchQuery: string) {
    this.isReady = false;
    this.router.navigate(['/images', searchQuery]);
  }

  openImageDetails(image) {
    let url = image.link.split("/");
    let id = url[5];
    this.router.navigate(['/images/details', id]);
  }

  goHome() {
    this.router.navigate(['.']);
  }

  ngOnInit() {
    this.getSearchQuery();
  }

}
