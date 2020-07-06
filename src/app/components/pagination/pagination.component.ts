import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  Output,
  EventEmitter,
} from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() count: number;
  @Input() offset: number;
  @Input() total_count: number;
  @Output() getDataEvent = new EventEmitter<number>();
  currentPage: number = 0;
  nrOfPages: number = 0;

  constructor(private http: APIService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChange) {
    this.count = parseInt(changes['count'].currentValue);
    const totalCount = parseInt(changes['total_count'].currentValue);
    this.nrOfPages =
      changes['count'].previousValue != this.count &&
      changes['total_count'].previousValue != totalCount
        ? Math.ceil(totalCount / this.count)
        : this.nrOfPages;
  }

  arrayIze(i: number) {
    const length = isNaN(i) ? 0 : i;
    return new Array(length);
  }

  getPage(e: Event) {
    // calculate offset
    this.currentPage = parseInt(e.target['page-number']);
    const offset = this.currentPage * this.count;
    this.getDataEvent.emit(offset);
  }
}
