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
  @Input() count: string; // number of items retrieved...
  @Input() offset: number; // starting from this index
  @Input() total_count: string; // the total number of items available
  @Output() getDataEvent = new EventEmitter<number>();
  nrOfPages: number = 0;
  maxNrOfPages: number = 25;
  firstPage: number = 1;
  lastPage: number;
  // this allows a class to be applied to the selected page-item in the template
  selectedPage = this.firstPage;
  nrOfPageButtons: number = 5;

  constructor(private http: APIService) {}

  /**
   *
   * @param changes {SimpleChange} - the values of input properties count, offset and total_count
   * @returns void
   * @description - when data is async retrieved by parentcomponent, values for count and total_count change. So assign those values here.
   */
  ngOnChanges(changes: SimpleChange) {
    //  CurrentValue of count only differs from assigned values after the first request. On subsequent requests only input parameter'offset' changes and thus is the only property available in the changes object
    const count = changes['count']
      ? parseInt(changes['count'].currentValue)
      : parseInt(this.count);

    // CurrentValue of total_count only differs from assigned value after the first request. After that only input parameter 'offset' changes and  is the only proprety available in the changes object.
    const totalCount = changes['total_count']
      ? parseInt(changes['total_count'].currentValue)
      : parseInt(this.total_count);
    this.nrOfPages = Math.min(totalCount, this.maxNrOfPages);

    this.lastPage = this.firstPage + count - 1;
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
    this.selectedPage =
      page < 1
        ? this.selectedPage
        : page > this.nrOfPages
        ? this.selectedPage
        : page;
    if (page < this.firstPage) {
      if (page > this.nrOfPageButtons) {
        this.firstPage -= this.nrOfPageButtons;
      } else {
        this.firstPage = 1;
      }
    } else if (page > this.lastPage) {
      if (page > this.nrOfPages - this.nrOfPageButtons) {
        this.firstPage = this.nrOfPages - this.nrOfPageButtons + 1;
      } else {
        this.firstPage += this.nrOfPageButtons;
      }
    }
    this.lastPage = this.firstPage + this.nrOfPageButtons;
    const offset = (this.selectedPage - 1) * parseInt(this.count);
    this.getDataEvent.emit(offset);
  }
}
