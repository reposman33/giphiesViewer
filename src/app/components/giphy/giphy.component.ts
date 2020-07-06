import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { fromEvent, Subscription } from 'rxjs';
//import { MatGridTile } from '@angular/material/grid-list';
// ngx-bootstrap Modal
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss'],
})
export class GiphyComponent implements OnInit {
  @ViewChild('searchText', { static: true }) searchText: ElementRef;
  @ViewChild('searchButton', { static: true }) searchButton: ElementRef;
  @ViewChild('matTable', { static: true }) matTable;
  @ViewChild('pagination', { static: true }) pagination;

  giphies = [];
  searchButton$: Subscription;
  getData$: Subscription;
  rows: number = 0;
  title: string;
  imageSrc: string;
  paginationOptions: { count: number; offset: number; total_count: number };
  GRID_GIPHS_PER_ROW: number = 5;
  GRID_ROWS_PER_PAGE: number = 5;
  IMAGE_WIDTH_HEIGHT: number = 200;
  DEFAULT_QUERY: string = 'cats';
  // ngx-bootstrao Modal
  modalRef: BsModalRef;

  constructor(private http: APIService, private modalService: BsModalService) {}

  ngOnInit() {
    this.paginationOptions = { count: 0, offset: 0, total_count: 0 };
    this.retrieveGiphies();
    this.searchButton$ = fromEvent(
      this.searchButton.nativeElement,
      'click'
    ).subscribe((res) => this.retrieveGiphies());
  }

  ngOnDestroy() {
    this.searchButton$.unsubscribe();
    this.getData$.unsubscribe();
  }

  openModal(templateRef: TemplateRef<any>, options) {
    this.modalRef = this.modalService.show(templateRef);
    this.imageSrc = options.imageSrc;
    this.title = options.title;
  }

  retrieveGiphies(offset: number = 0): void {
    this.getData$ = this.getData({
      query: this.searchText.nativeElement.value = this.DEFAULT_QUERY,
      limit: this.GRID_GIPHS_PER_ROW,
      offset: offset,
    }).subscribe((res: []) => {
      this.giphies = res['data'];
      this.rows = this.calculateGrid(res['data']);
      this.paginationOptions = res['pagination'];
    });
  }

  calculateGrid(data: []) {
    return Math.ceil(data.length / this.GRID_GIPHS_PER_ROW);
  }

  getData(options: { query: string; limit: number; offset: number }) {
    return this.http.get(options);
  }
}
