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
export class PaginationComponent {
  @Input() count: number; // number of items retrieved...
  @Input() offset: number; // starting from this index
  @Input() total_count: number; // the total number of items available
  @Output() getDataEvent = new EventEmitter<number>();
  nrOfPages: number = 0;
  firstPage: number = 1;
  lastPage: number = this.firstPage + this.count - 1;
  // this allows a class to be applied to the selected page-item in the template
  selectedPage = this.firstPage;

  constructor(private http: APIService) {}

  /**
   *
   * @param changes {SimpleChange} - the values of input properties count, offset and total_count
   * @returns void
   * @description - when data is async retrieved by parentcomponent, values for count and total_count change. So update nrOfPages here
   */
  ngOnChanges(changes: SimpleChange) {
    this.count = parseInt(changes['count'].currentValue);
    const totalCount = parseInt(changes['total_count'].currentValue);
    this.nrOfPages =
      changes['count'].previousValue != this.count &&
      changes['total_count'].previousValue != totalCount
        ? Math.ceil(totalCount / this.count)
        : this.nrOfPages;
  }

  /**
   *
   * @param arrayLength {number} - the ;length of the array
   * @description - In Ng it is only possible to loop over array so convert number to array
   * @returns {array}
   */
  arrayIze(arrayLength: number) {
    const length = isNaN(arrayLength) ? 0 : arrayLength;
    return new Array(length);
  }

  /**
   *
   * @param page number} - the page to retrieve
   * @returns void;
   * @description - calculate the new pagebuttons and call parent component to retrieve new data
   */
  getPage(page: number) {
    // clicking on the first or last pagebutton shifts the available pagebuttons 1 position.
    const pageShift =
      page === this.firstPage && this.firstPage > 1
        ? -1
        : page === this.lastPage && this.lastPage < this.nrOfPages - 1
        ? 1
        : 0;
    this.firstPage += pageShift;
    if (pageShift !== 0) {
      this.selectedPage = page;
      this.lastPage = this.firstPage + this.count - 1;
      const offset = (this.selectedPage - 1) * this.count;
      this.getDataEvent.emit(offset);
    }
  }
}
