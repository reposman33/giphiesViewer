import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss'],
})
export class GiphyComponent implements OnInit {
  @ViewChild('searchText', { static: true }) searchText: ElementRef;
  @ViewChild('searchButton', { static: true }) searchButton: ElementRef;
  @ViewChild('matTable', { static: true }) matTable;
  giphies = [];
  clicks$: Subscription;
  rows: number = 0;
  GRID_COLUMNS_PER_ROW: number = 4;
  GRID_ROWS_PER_PAGE: number = 5;
  IMAGE_WIDTH_HEIGHT: number = 200;
  // MatTable
  displayedColumns = ['id', 'title', 'url', 'type'];

  constructor(private http: APIService) {}

  ngOnInit() {
    this.retrieveGiphies();
    this.clicks$ = fromEvent(
      this.searchButton.nativeElement,
      'click'
    ).subscribe((res) => this.retrieveGiphies());
  }

  ngOnDestroy() {
    this.clicks$.unsubscribe();
  }

  retrieveGiphies() {
    this.getData(this.searchText.nativeElement.value).subscribe((res: []) => {
      this.giphies = res;
      this.calculateGrid(res);
    });
  }

  calculateGrid(data: []) {
    console.log('giphys=', data);
    this.rows = Math.ceil(data.length / this.GRID_COLUMNS_PER_ROW);
  }

  getData(query: string) {
    return this.http.get(query);
  }

  getGiphyData() {
    return [
      {
        type: 'gif',
        id: 'v6aOjy0Qo1fIA',
        url: 'https://giphy.com/gifs/v6aOjy0Qo1fIA',
        slug: 'v6aOjy0Qo1fIA',
        bitly_gif_url: 'https://gph.is/28ZplIv',
        bitly_url: 'https://gph.is/28ZplIv',
        embed_url: 'https://giphy.com/embed/v6aOjy0Qo1fIA',
        username: '',
        source: 'https://imgur.com/gallery/DzfVJox',
        title: 'bored cat GIF',
        rating: 'g',
        content_url: '',
        source_tld: 'imgur.com',
        source_post_url: 'https://imgur.com/gallery/DzfVJox',
        is_sticker: 0,
        import_datetime: '2016-06-25 19:12:34',
        trending_datetime: '2019-10-16 16:45:09',
        images: {
          downsized_large: {
            height: '610',
            size: '2046175',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '548',
          },
          fixed_height_small_still: {
            height: '100',
            size: '4667',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/100_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100_s.gif',
            width: '90',
          },
          original: {
            frames: '102',
            hash: '43a4ce5d45db5c19fe9da24e9060ecc4',
            height: '610',
            mp4:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '566268',
            size: '2046175',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            webp:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.webp',
            webp_size: '1432190',
            width: '548',
          },
          fixed_height_downsampled: {
            height: '200',
            size: '82983',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.gif',
            webp:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.webp',
            webp_size: '45210',
            width: '180',
          },
          downsized_still: {
            height: '610',
            size: '47882',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy-downsized_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized_s.gif',
            width: '548',
          },
          fixed_height_still: {
            height: '200',
            size: '13431',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_s.gif',
            width: '180',
          },
          downsized_medium: {
            height: '610',
            size: '2046175',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '548',
          },
          downsized: {
            height: '610',
            size: '1708123',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy-downsized.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized.gif',
            width: '548',
          },
          preview_webp: {
            height: '156',
            size: '26636',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy-preview.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.webp',
            width: '140',
          },
          original_mp4: {
            height: '534',
            mp4:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '566268',
            width: '480',
          },
          fixed_height_small: {
            height: '100',
            mp4:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/100.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.mp4',
            mp4_size: '16472',
            size: '246933',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/100.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.gif',
            webp:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/100.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.webp',
            webp_size: '59504',
            width: '90',
          },
          fixed_height: {
            height: '200',
            mp4:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.mp4',
            mp4_size: '48383',
            size: '574146',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.gif',
            webp:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.webp',
            webp_size: '170780',
            width: '180',
          },
          downsized_small: {
            height: '262',
            mp4:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy-downsized-small.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-small.mp4',
            mp4_size: '36041',
            width: '235',
          },
          preview: {
            height: '262',
            mp4:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy-preview.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.mp4',
            mp4_size: '29128',
            width: '235',
          },
          fixed_width_downsampled: {
            height: '223',
            size: '100483',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200w_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.gif',
            webp:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200w_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.webp',
            webp_size: '53798',
            width: '200',
          },
          fixed_width_small_still: {
            height: '112',
            size: '5331',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/100w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w_s.gif',
            width: '100',
          },
          fixed_width_small: {
            height: '112',
            mp4:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/100w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.mp4',
            mp4_size: '18183',
            size: '291619',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/100w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.gif',
            webp:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/100w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.webp',
            webp_size: '79138',
            width: '100',
          },
          original_still: {
            height: '610',
            size: '85371',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '548',
          },
          fixed_width_still: {
            height: '223',
            size: '14990',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_s.gif',
            width: '200',
          },
          looping: {
            mp4:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy-loop.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-loop.mp4',
            mp4_size: '1370740',
          },
          fixed_width: {
            height: '223',
            mp4:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.mp4',
            mp4_size: '56528',
            size: '693637',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.gif',
            webp:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/200w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.webp',
            webp_size: '223804',
            width: '200',
          },
          preview_gif: {
            height: '97',
            size: '48708',
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/giphy-preview.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.gif',
            width: '87',
          },
          '480w_still': {
            url:
              'https://media2.giphy.com/media/v6aOjy0Qo1fIA/480w_s.jpg?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=480w_s.jpg',
            width: '480',
            height: '534',
          },
        },
        analytics_response_payload:
          'e=Z2lmX2lkPXY2YU9qeTBRbzFmSUEmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hNDg1YjRjZGJlNjY5MmU0Mzg4MWMyOWJiMThiMDc4MGMzZjZlMmFkYjY5NGMxODA',
        analytics: {
          onload: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=v6aOjy0Qo1fIA&action_type=SEEN',
          },
          onclick: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=v6aOjy0Qo1fIA&action_type=CLICK',
          },
          onsent: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=v6aOjy0Qo1fIA&action_type=SENT',
          },
        },
      },
      {
        type: 'gif',
        id: 'WXB88TeARFVvi',
        url: 'https://giphy.com/gifs/cat-funny-WXB88TeARFVvi',
        slug: 'cat-funny-WXB88TeARFVvi',
        bitly_gif_url: 'https://gph.is/1ikxVLT',
        bitly_url: 'https://gph.is/1ikxVLT',
        embed_url: 'https://giphy.com/embed/WXB88TeARFVvi',
        username: '',
        source:
          'https://allinonefun.tumblr.com/post/64576645275/all-in-one-fun-dancing-cat',
        title: 'dance party cat GIF',
        rating: 'g',
        content_url: '',
        source_tld: 'allinonefun.tumblr.com',
        source_post_url:
          'https://allinonefun.tumblr.com/post/64576645275/all-in-one-fun-dancing-cat',
        is_sticker: 0,
        import_datetime: '2014-01-09 12:29:23',
        trending_datetime: '1970-01-01 00:00:00',
        images: {
          downsized_large: {
            height: '244',
            size: '158157',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '194',
          },
          fixed_height_small_still: {
            height: '100',
            size: '4682',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/100_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100_s.gif',
            width: '80',
          },
          original: {
            frames: '16',
            hash: 'bc065a38c0c141d82cf4b257de050c30',
            height: '244',
            mp4:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '585464',
            size: '158157',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            webp:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.webp',
            webp_size: '211474',
            width: '194',
          },
          fixed_height_downsampled: {
            height: '200',
            size: '79487',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.gif',
            webp:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.webp',
            webp_size: '51304',
            width: '159',
          },
          downsized_still: {
            height: '244',
            size: '158157',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '194',
          },
          fixed_height_still: {
            height: '200',
            size: '13301',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_s.gif',
            width: '159',
          },
          downsized_medium: {
            height: '244',
            size: '158157',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '194',
          },
          downsized: {
            height: '244',
            size: '158157',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '194',
          },
          preview_webp: {
            height: '122',
            size: '29686',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy-preview.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.webp',
            width: '98',
          },
          original_mp4: {
            height: '602',
            mp4:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '585464',
            width: '480',
          },
          fixed_height_small: {
            height: '100',
            mp4:
              'https://media0.giphy.com/media/WXB88TeARFVvi/100.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.mp4',
            mp4_size: '19428',
            size: '63754',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/100.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.gif',
            webp:
              'https://media0.giphy.com/media/WXB88TeARFVvi/100.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.webp',
            webp_size: '34004',
            width: '80',
          },
          fixed_height: {
            height: '200',
            mp4:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.mp4',
            mp4_size: '84912',
            size: '199912',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.gif',
            webp:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.webp',
            webp_size: '122200',
            width: '159',
          },
          downsized_small: {
            height: '218',
            mp4:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy-downsized-small.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-small.mp4',
            mp4_size: '53669',
            width: '173',
          },
          preview: {
            height: '150',
            mp4:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy-preview.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.mp4',
            mp4_size: '22636',
            width: '119',
          },
          fixed_width_downsampled: {
            height: '252',
            size: '129138',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200w_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.gif',
            webp:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200w_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.webp',
            webp_size: '82414',
            width: '200',
          },
          fixed_width_small_still: {
            height: '126',
            size: '6531',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/100w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w_s.gif',
            width: '100',
          },
          fixed_width_small: {
            height: '126',
            mp4:
              'https://media0.giphy.com/media/WXB88TeARFVvi/100w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.mp4',
            mp4_size: '30168',
            size: '90945',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/100w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.gif',
            webp:
              'https://media0.giphy.com/media/WXB88TeARFVvi/100w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.webp',
            webp_size: '49498',
            width: '100',
          },
          original_still: {
            height: '244',
            size: '10043',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '194',
          },
          fixed_width_still: {
            height: '252',
            size: '20373',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_s.gif',
            width: '200',
          },
          looping: {
            mp4:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy-loop.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-loop.mp4',
            mp4_size: '3691319',
          },
          fixed_width: {
            height: '252',
            mp4:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.mp4',
            mp4_size: '148893',
            size: '311663',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.gif',
            webp:
              'https://media0.giphy.com/media/WXB88TeARFVvi/200w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.webp',
            webp_size: '202236',
            width: '200',
          },
          preview_gif: {
            height: '73',
            size: '48114',
            url:
              'https://media0.giphy.com/media/WXB88TeARFVvi/giphy-preview.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.gif',
            width: '58',
          },
          '480w_still': {
            url:
              'https://media4.giphy.com/media/WXB88TeARFVvi/480w_s.jpg?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=480w_s.jpg',
            width: '480',
            height: '604',
          },
        },
        analytics_response_payload:
          'e=Z2lmX2lkPVdYQjg4VGVBUkZWdmkmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hNDg1YjRjZGJlNjY5MmU0Mzg4MWMyOWJiMThiMDc4MGMzZjZlMmFkYjY5NGMxODA',
        analytics: {
          onload: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=WXB88TeARFVvi&action_type=SEEN',
          },
          onclick: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=WXB88TeARFVvi&action_type=CLICK',
          },
          onsent: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=WXB88TeARFVvi&action_type=SENT',
          },
        },
      },
      {
        type: 'gif',
        id: '13CoXDiaCcCoyk',
        url: 'https://giphy.com/gifs/wiggle-shaq-13CoXDiaCcCoyk',
        slug: 'wiggle-shaq-13CoXDiaCcCoyk',
        bitly_gif_url: 'https://gph.is/Q4BXP3',
        bitly_url: 'https://gph.is/Q4BXP3',
        embed_url: 'https://giphy.com/embed/13CoXDiaCcCoyk',
        username: '',
        source: 'https://tumblr.4gifs.com/post/84766399414/cat-shaq-wiggles',
        title: 'funny cat GIF',
        rating: 'g',
        content_url: '',
        source_tld: 'tumblr.4gifs.com',
        source_post_url:
          'https://tumblr.4gifs.com/post/84766399414/cat-shaq-wiggles',
        is_sticker: 0,
        import_datetime: '2014-05-04 22:56:13',
        trending_datetime: '2016-03-04 20:45:01',
        images: {
          downsized_large: {
            height: '332',
            size: '2028508',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '400',
          },
          fixed_height_small_still: {
            height: '100',
            size: '5829',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/100_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100_s.gif',
            width: '121',
          },
          original: {
            frames: '44',
            hash: '1ec35ab1efd1d8fada033cb5ab546d66',
            height: '332',
            mp4:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '869558',
            size: '2028508',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            webp:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.webp',
            webp_size: '849834',
            width: '400',
          },
          fixed_height_downsampled: {
            height: '200',
            size: '105829',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.gif',
            webp:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.webp',
            webp_size: '63916',
            width: '241',
          },
          downsized_still: {
            height: '332',
            size: '41647',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy-downsized_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized_s.gif',
            width: '400',
          },
          fixed_height_still: {
            height: '200',
            size: '16471',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_s.gif',
            width: '241',
          },
          downsized_medium: {
            height: '332',
            size: '2028508',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '400',
          },
          downsized: {
            height: '332',
            size: '1092222',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy-downsized.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized.gif',
            width: '400',
          },
          preview_webp: {
            height: '108',
            size: '32108',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy-preview.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.webp',
            width: '130',
          },
          original_mp4: {
            height: '398',
            mp4:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '869558',
            width: '480',
          },
          fixed_height_small: {
            height: '100',
            mp4:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/100.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.mp4',
            mp4_size: '47357',
            size: '212317',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/100.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.gif',
            webp:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/100.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.webp',
            webp_size: '92074',
            width: '121',
          },
          fixed_height: {
            height: '200',
            mp4:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.mp4',
            mp4_size: '131477',
            size: '636163',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.gif',
            webp:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.webp',
            webp_size: '232336',
            width: '241',
          },
          downsized_small: {
            height: '164',
            mp4:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy-downsized-small.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-small.mp4',
            mp4_size: '51805',
            width: '197',
          },
          preview: {
            height: '164',
            mp4:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy-preview.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.mp4',
            mp4_size: '38228',
            width: '197',
          },
          fixed_width_downsampled: {
            height: '166',
            size: '70586',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200w_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.gif',
            webp:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200w_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.webp',
            webp_size: '47866',
            width: '200',
          },
          fixed_width_small_still: {
            height: '83',
            size: '4572',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/100w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w_s.gif',
            width: '100',
          },
          fixed_width_small: {
            height: '83',
            mp4:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/100w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.mp4',
            mp4_size: '38061',
            size: '160427',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/100w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.gif',
            webp:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/100w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.webp',
            webp_size: '73324',
            width: '100',
          },
          original_still: {
            height: '332',
            size: '46206',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '400',
          },
          fixed_width_still: {
            height: '166',
            size: '12691',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_s.gif',
            width: '200',
          },
          looping: {
            mp4:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy-loop.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-loop.mp4',
            mp4_size: '3253426',
          },
          fixed_width: {
            height: '166',
            mp4:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.mp4',
            mp4_size: '97649',
            size: '499319',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.gif',
            webp:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/200w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.webp',
            webp_size: '183058',
            width: '200',
          },
          preview_gif: {
            height: '65',
            size: '49925',
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/giphy-preview.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.gif',
            width: '78',
          },
          '480w_still': {
            url:
              'https://media2.giphy.com/media/13CoXDiaCcCoyk/480w_s.jpg?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=480w_s.jpg',
            width: '480',
            height: '398',
          },
        },
        analytics_response_payload:
          'e=Z2lmX2lkPTEzQ29YRGlhQ2NDb3lrJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9YTQ4NWI0Y2RiZTY2OTJlNDM4ODFjMjliYjE4YjA3ODBjM2Y2ZTJhZGI2OTRjMTgw',
        analytics: {
          onload: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=13CoXDiaCcCoyk&action_type=SEEN',
          },
          onclick: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=13CoXDiaCcCoyk&action_type=CLICK',
          },
          onsent: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=13CoXDiaCcCoyk&action_type=SENT',
          },
        },
      },
      {
        type: 'gif',
        id: 'MCfhrrNN1goH6',
        url: 'https://giphy.com/gifs/easy-ear-MCfhrrNN1goH6',
        slug: 'easy-ear-MCfhrrNN1goH6',
        bitly_gif_url: 'https://gph.is/2zcNO4C',
        bitly_url: 'https://gph.is/2zcNO4C',
        embed_url: 'https://giphy.com/embed/MCfhrrNN1goH6',
        username: '',
        source:
          'https://www.reddit.com/r/gifs/comments/7lc9g4/easy_there_youre_chewing_my_ear_off/',
        title: 'Cat Ear GIF by swerk',
        rating: 'g',
        content_url: '',
        source_tld: 'www.reddit.com',
        source_post_url:
          'https://www.reddit.com/r/gifs/comments/7lc9g4/easy_there_youre_chewing_my_ear_off/',
        is_sticker: 0,
        import_datetime: '2017-12-21 20:40:19',
        trending_datetime: '2020-04-06 06:15:06',
        images: {
          downsized_large: {
            height: '384',
            size: '5607603',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy-downsized-large.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-large.gif',
            width: '384',
          },
          fixed_height_small_still: {
            height: '100',
            size: '10324',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/100_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100_s.gif',
            width: '100',
          },
          original: {
            frames: '60',
            hash: 'e3df6b122db76924834f26a6d6a02865',
            height: '480',
            mp4:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '1030002',
            size: '8340074',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            webp:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.webp',
            webp_size: '1603098',
            width: '480',
          },
          fixed_height_downsampled: {
            height: '200',
            size: '188762',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.gif',
            webp:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.webp',
            webp_size: '57112',
            width: '200',
          },
          downsized_still: {
            height: '249',
            size: '47822',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy-downsized_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized_s.gif',
            width: '250',
          },
          fixed_height_still: {
            height: '200',
            size: '31786',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_s.gif',
            width: '200',
          },
          downsized_medium: {
            height: '294',
            size: '3517866',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy-downsized-medium.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-medium.gif',
            width: '294',
          },
          downsized: {
            height: '249',
            size: '1297500',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy-downsized.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized.gif',
            width: '250',
          },
          preview_webp: {
            height: '135',
            size: '48804',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy-preview.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.webp',
            width: '135',
          },
          original_mp4: {
            height: '480',
            mp4:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '1030002',
            width: '480',
          },
          fixed_height_small: {
            height: '100',
            mp4:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/100.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.mp4',
            mp4_size: '70614',
            size: '530247',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/100.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.gif',
            webp:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/100.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.webp',
            webp_size: '176096',
            width: '100',
          },
          fixed_height: {
            height: '200',
            mp4:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.mp4',
            mp4_size: '230209',
            size: '1803764',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.gif',
            webp:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.webp',
            webp_size: '466852',
            width: '200',
          },
          downsized_small: {
            height: '210',
            mp4:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy-downsized-small.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-small.mp4',
            mp4_size: '122911',
            width: '210',
          },
          preview: {
            height: '298',
            mp4:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy-preview.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.mp4',
            mp4_size: '44512',
            width: '298',
          },
          fixed_width_downsampled: {
            height: '200',
            size: '188762',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200w_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.gif',
            webp:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200w_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.webp',
            webp_size: '57112',
            width: '200',
          },
          fixed_width_small_still: {
            height: '100',
            size: '10324',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/100w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w_s.gif',
            width: '100',
          },
          fixed_width_small: {
            height: '100',
            mp4:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/100w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.mp4',
            mp4_size: '46112',
            size: '530247',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/100w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.gif',
            webp:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/100w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.webp',
            webp_size: '176096',
            width: '100',
          },
          original_still: {
            height: '480',
            size: '140708',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '480',
          },
          fixed_width_still: {
            height: '200',
            size: '31786',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_s.gif',
            width: '200',
          },
          looping: {
            mp4:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy-loop.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-loop.mp4',
            mp4_size: '2569831',
          },
          fixed_width: {
            height: '200',
            mp4:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.mp4',
            mp4_size: '230209',
            size: '1803764',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.gif',
            webp:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/200w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.webp',
            webp_size: '466852',
            width: '200',
          },
          preview_gif: {
            height: '92',
            size: '48384',
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/giphy-preview.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.gif',
            width: '92',
          },
          '480w_still': {
            url:
              'https://media2.giphy.com/media/MCfhrrNN1goH6/480w_s.jpg?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=480w_s.jpg',
            width: '480',
            height: '480',
          },
        },
        analytics_response_payload:
          'e=Z2lmX2lkPU1DZmhyck5OMWdvSDYmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hNDg1YjRjZGJlNjY5MmU0Mzg4MWMyOWJiMThiMDc4MGMzZjZlMmFkYjY5NGMxODA',
        analytics: {
          onload: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=MCfhrrNN1goH6&action_type=SEEN',
          },
          onclick: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=MCfhrrNN1goH6&action_type=CLICK',
          },
          onsent: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=MCfhrrNN1goH6&action_type=SENT',
          },
        },
      },
      {
        type: 'gif',
        id: '1iu8uG2cjYFZS6wTxv',
        url: 'https://giphy.com/gifs/kitty-smart-1iu8uG2cjYFZS6wTxv',
        slug: 'kitty-smart-1iu8uG2cjYFZS6wTxv',
        bitly_gif_url: 'https://gph.is/2ERMojG',
        bitly_url: 'https://gph.is/2ERMojG',
        embed_url: 'https://giphy.com/embed/1iu8uG2cjYFZS6wTxv',
        username: '',
        source: 'https://www.reddit.com/r/gifs/comments/804jjk/smart_kitty/',
        title: 'Book Club Cat GIF',
        rating: 'g',
        content_url: '',
        source_tld: 'www.reddit.com',
        source_post_url:
          'https://www.reddit.com/r/gifs/comments/804jjk/smart_kitty/',
        is_sticker: 0,
        import_datetime: '2018-02-25 14:00:24',
        trending_datetime: '2020-01-30 02:45:04',
        images: {
          hd: {
            height: '910',
            mp4:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy-hd.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-hd.mp4',
            mp4_size: '26001668',
            width: '728',
          },
          downsized_large: {
            height: '367',
            size: '7061135',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy-downsized-large.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-large.gif',
            width: '293',
          },
          fixed_height_small_still: {
            height: '100',
            size: '7346',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/100_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100_s.gif',
            width: '80',
          },
          original: {
            frames: '265',
            hash: '303638e14d5184f81f068a9453cdb653',
            height: '480',
            mp4:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '4097381',
            size: '34879567',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            webp:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.webp',
            webp_size: '10430754',
            width: '384',
          },
          fixed_height_downsampled: {
            height: '200',
            size: '142726',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.gif',
            webp:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.webp',
            webp_size: '43706',
            width: '160',
          },
          downsized_still: {
            height: '192',
            size: '24186',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy-downsized_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized_s.gif',
            width: '153',
          },
          fixed_height_still: {
            height: '200',
            size: '23162',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_s.gif',
            width: '160',
          },
          downsized_medium: {
            height: '306',
            size: '4345080',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy-downsized-medium.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-medium.gif',
            width: '245',
          },
          downsized: {
            height: '192',
            size: '1303236',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy-downsized.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized.gif',
            width: '153',
          },
          preview_webp: {
            height: '163',
            size: '48956',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy-preview.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.webp',
            width: '130',
          },
          original_mp4: {
            height: '600',
            mp4:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '4097381',
            width: '480',
          },
          fixed_height_small: {
            height: '100',
            mp4:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/100.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.mp4',
            mp4_size: '153478',
            size: '1446859',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/100.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.gif',
            webp:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/100.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.webp',
            webp_size: '588728',
            width: '80',
          },
          fixed_height: {
            height: '200',
            mp4:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.mp4',
            mp4_size: '450734',
            size: '5349052',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.gif',
            webp:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.webp',
            webp_size: '1859456',
            width: '160',
          },
          downsized_small: {
            height: '192',
            mp4:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy-downsized-small.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-small.mp4',
            mp4_size: '195533',
            width: '153',
          },
          preview: {
            height: '200',
            mp4:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy-preview.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.mp4',
            mp4_size: '29102',
            width: '160',
          },
          fixed_width_downsampled: {
            height: '250',
            size: '221177',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200w_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.gif',
            webp:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200w_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.webp',
            webp_size: '65890',
            width: '200',
          },
          fixed_width_small_still: {
            height: '125',
            size: '10402',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/100w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w_s.gif',
            width: '100',
          },
          fixed_width_small: {
            height: '125',
            mp4:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/100w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.mp4',
            mp4_size: '47238',
            size: '2204313',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/100w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.gif',
            webp:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/100w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.webp',
            webp_size: '857148',
            width: '100',
          },
          original_still: {
            height: '480',
            size: '151004',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '384',
          },
          fixed_width_still: {
            height: '250',
            size: '35900',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_s.gif',
            width: '200',
          },
          looping: {
            mp4:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy-loop.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-loop.mp4',
            mp4_size: '7799607',
          },
          fixed_width: {
            height: '250',
            mp4:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.mp4',
            mp4_size: '680330',
            size: '8372734',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.gif',
            webp:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/200w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.webp',
            webp_size: '2767642',
            width: '200',
          },
          preview_gif: {
            height: '99',
            size: '47433',
            url:
              'https://media2.giphy.com/media/1iu8uG2cjYFZS6wTxv/giphy-preview.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.gif',
            width: '79',
          },
          '480w_still': {
            url:
              'https://media1.giphy.com/media/1iu8uG2cjYFZS6wTxv/480w_s.jpg?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=480w_s.jpg',
            width: '480',
            height: '600',
          },
        },
        analytics_response_payload:
          'e=Z2lmX2lkPTFpdTh1RzJjallGWlM2d1R4diZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWE0ODViNGNkYmU2NjkyZTQzODgxYzI5YmIxOGIwNzgwYzNmNmUyYWRiNjk0YzE4MA',
        analytics: {
          onload: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=1iu8uG2cjYFZS6wTxv&action_type=SEEN',
          },
          onclick: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=1iu8uG2cjYFZS6wTxv&action_type=CLICK',
          },
          onsent: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=1iu8uG2cjYFZS6wTxv&action_type=SENT',
          },
        },
      },
      {
        type: 'gif',
        id: 'q1MeAPDDMb43K',
        url: 'https://giphy.com/gifs/cat-laugh-funny-q1MeAPDDMb43K',
        slug: 'cat-laugh-funny-q1MeAPDDMb43K',
        bitly_gif_url: 'https://gph.is/1fIfMKt',
        bitly_url: 'https://gph.is/1fIfMKt',
        embed_url: 'https://giphy.com/embed/q1MeAPDDMb43K',
        username: '',
        source: 'https://tumblr.com',
        title: 'laser sword cat GIF',
        rating: 'g',
        content_url: '',
        source_tld: 'tumblr.com',
        source_post_url: 'https://tumblr.com',
        is_sticker: 0,
        import_datetime: '2014-01-18 09:25:57',
        trending_datetime: '1970-01-01 00:00:00',
        images: {
          downsized_large: {
            height: '188',
            size: '864692',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '300',
          },
          fixed_height_small_still: {
            height: '100',
            size: '10967',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/100_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100_s.gif',
            width: '160',
          },
          original: {
            frames: '27',
            hash: '13bad9855fb9a3331511b328b705dac6',
            height: '188',
            mp4:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '795697',
            size: '864692',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            webp:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.webp',
            webp_size: '397648',
            width: '300',
          },
          fixed_height_downsampled: {
            height: '200',
            size: '201767',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.gif',
            webp:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.webp',
            webp_size: '107070',
            width: '319',
          },
          downsized_still: {
            height: '188',
            size: '864692',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '300',
          },
          fixed_height_still: {
            height: '200',
            size: '32796',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_s.gif',
            width: '319',
          },
          downsized_medium: {
            height: '188',
            size: '864692',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '300',
          },
          downsized: {
            height: '188',
            size: '864692',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '300',
          },
          preview_webp: {
            height: '82',
            size: '31432',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy-preview.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.webp',
            width: '130',
          },
          original_mp4: {
            height: '300',
            mp4:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '795697',
            width: '480',
          },
          fixed_height_small: {
            height: '100',
            mp4:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/100.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.mp4',
            mp4_size: '62315',
            size: '250216',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/100.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.gif',
            webp:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/100.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.webp',
            webp_size: '96428',
            width: '160',
          },
          fixed_height: {
            height: '200',
            mp4:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.mp4',
            mp4_size: '279645',
            size: '824608',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.gif',
            webp:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.webp',
            webp_size: '392688',
            width: '319',
          },
          downsized_small: {
            height: '130',
            mp4:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy-downsized-small.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-small.mp4',
            mp4_size: '60601',
            width: '207',
          },
          preview: {
            height: '116',
            mp4:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy-preview.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.mp4',
            mp4_size: '44226',
            width: '185',
          },
          fixed_width_downsampled: {
            height: '125',
            size: '86193',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200w_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.gif',
            webp:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200w_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.webp',
            webp_size: '44468',
            width: '200',
          },
          fixed_width_small_still: {
            height: '63',
            size: '4831',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/100w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w_s.gif',
            width: '100',
          },
          fixed_width_small: {
            height: '63',
            mp4:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/100w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.mp4',
            mp4_size: '31491',
            size: '103227',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/100w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.gif',
            webp:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/100w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.webp',
            webp_size: '52500',
            width: '100',
          },
          original_still: {
            height: '188',
            size: '35270',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '300',
          },
          fixed_width_still: {
            height: '125',
            size: '17295',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_s.gif',
            width: '200',
          },
          looping: {
            mp4:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy-loop.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-loop.mp4',
            mp4_size: '3040155',
          },
          fixed_width: {
            height: '125',
            mp4:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.mp4',
            mp4_size: '94753',
            size: '353550',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.gif',
            webp:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/200w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.webp',
            webp_size: '139472',
            width: '200',
          },
          preview_gif: {
            height: '54',
            size: '48313',
            url:
              'https://media1.giphy.com/media/q1MeAPDDMb43K/giphy-preview.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.gif',
            width: '86',
          },
          '480w_still': {
            url:
              'https://media4.giphy.com/media/q1MeAPDDMb43K/480w_s.jpg?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=480w_s.jpg',
            width: '480',
            height: '301',
          },
        },
        analytics_response_payload:
          'e=Z2lmX2lkPXExTWVBUERETWI0M0smZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hNDg1YjRjZGJlNjY5MmU0Mzg4MWMyOWJiMThiMDc4MGMzZjZlMmFkYjY5NGMxODA',
        analytics: {
          onload: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=q1MeAPDDMb43K&action_type=SEEN',
          },
          onclick: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=q1MeAPDDMb43K&action_type=CLICK',
          },
          onsent: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=q1MeAPDDMb43K&action_type=SENT',
          },
        },
      },
      {
        type: 'gif',
        id: '11s7Ke7jcNxCHS',
        url: 'https://giphy.com/gifs/aww-11s7Ke7jcNxCHS',
        slug: 'aww-11s7Ke7jcNxCHS',
        bitly_gif_url: 'https://gph.is/1BxBngD',
        bitly_url: 'https://gph.is/1BxBngD',
        embed_url: 'https://giphy.com/embed/11s7Ke7jcNxCHS',
        username: '',
        source: 'https://reddit.com/r/aww_gifs/comments/2xzo1j/streeeeeetch/',
        title: 'Stretching At Home GIF',
        rating: 'g',
        content_url: '',
        source_tld: 'reddit.com',
        source_post_url:
          'https://reddit.com/r/aww_gifs/comments/2xzo1j/streeeeeetch/',
        is_sticker: 0,
        import_datetime: '2015-03-05 04:46:39',
        trending_datetime: '2019-12-01 04:45:11',
        images: {
          downsized_large: {
            height: '210',
            size: '608333',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '263',
          },
          fixed_height_small_still: {
            height: '100',
            size: '8645',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/100_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100_s.gif',
            width: '125',
          },
          original: {
            frames: '24',
            hash: 'bd46d4220d92ed4e5af427fa2740486c',
            height: '210',
            mp4:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '636030',
            size: '608333',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            webp:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.webp',
            webp_size: '338386',
            width: '263',
          },
          fixed_height_downsampled: {
            height: '200',
            size: '141538',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.gif',
            webp:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.webp',
            webp_size: '89878',
            width: '250',
          },
          downsized_still: {
            height: '210',
            size: '608333',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '263',
          },
          preview_webp: {
            height: '98',
            size: '37296',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy-preview.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.webp',
            width: '122',
          },
          fixed_height_still: {
            height: '200',
            size: '29133',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_s.gif',
            width: '250',
          },
          downsized_medium: {
            height: '210',
            size: '608333',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '263',
          },
          downsized: {
            height: '210',
            size: '608333',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '263',
          },
          original_mp4: {
            height: '382',
            mp4:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '636030',
            width: '480',
          },
          fixed_height_small: {
            height: '100',
            mp4:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/100.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.mp4',
            mp4_size: '39908',
            size: '163953',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/100.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.gif',
            webp:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/100.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.webp',
            webp_size: '91858',
            width: '125',
          },
          fixed_height: {
            height: '200',
            mp4:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.mp4',
            mp4_size: '168682',
            size: '543678',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.gif',
            webp:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.webp',
            webp_size: '293802',
            width: '250',
          },
          fixed_width_small: {
            height: '80',
            mp4:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/100w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.mp4',
            mp4_size: '26803',
            size: '114742',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/100w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.gif',
            webp:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/100w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.webp',
            webp_size: '63222',
            width: '100',
          },
          downsized_small: {
            height: '176',
            mp4:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy-downsized-small.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-small.mp4',
            mp4_size: '52941',
            width: '219',
          },
          preview: {
            height: '156',
            mp4:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy-preview.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.mp4',
            mp4_size: '37384',
            width: '194',
          },
          fixed_width_downsampled: {
            height: '160',
            size: '93639',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200w_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.gif',
            webp:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200w_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.webp',
            webp_size: '59264',
            width: '200',
          },
          fixed_width_small_still: {
            height: '80',
            size: '5356',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/100w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w_s.gif',
            width: '100',
          },
          '480w_still': {
            height: '383',
            size: '25146',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/480w_s.jpg?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=480w_s.jpg',
            width: '480',
          },
          original_still: {
            height: '210',
            size: '28163',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '263',
          },
          fixed_width_still: {
            height: '160',
            size: '20168',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_s.gif',
            width: '200',
          },
          looping: {
            mp4:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy-loop.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-loop.mp4',
            mp4_size: '3027686',
          },
          fixed_width: {
            height: '160',
            mp4:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.mp4',
            mp4_size: '103242',
            size: '365274',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.gif',
            webp:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/200w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.webp',
            webp_size: '196200',
            width: '200',
          },
          preview_gif: {
            height: '58',
            size: '49210',
            url:
              'https://media2.giphy.com/media/11s7Ke7jcNxCHS/giphy-preview.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.gif',
            width: '73',
          },
        },
        analytics_response_payload:
          'e=Z2lmX2lkPTExczdLZTdqY054Q0hTJmV2ZW50X3R5cGU9R0lGX1NFQVJDSCZjaWQ9YTQ4NWI0Y2RiZTY2OTJlNDM4ODFjMjliYjE4YjA3ODBjM2Y2ZTJhZGI2OTRjMTgw',
        analytics: {
          onload: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=11s7Ke7jcNxCHS&action_type=SEEN',
          },
          onclick: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=11s7Ke7jcNxCHS&action_type=CLICK',
          },
          onsent: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=11s7Ke7jcNxCHS&action_type=SENT',
          },
        },
      },
      {
        type: 'gif',
        id: 'E0cyxhawhe9dm',
        url: 'https://giphy.com/gifs/room-E0cyxhawhe9dm',
        slug: 'room-E0cyxhawhe9dm',
        bitly_gif_url: 'https://gph.is/2pCtkPr',
        bitly_url: 'https://gph.is/2pCtkPr',
        embed_url: 'https://giphy.com/embed/E0cyxhawhe9dm',
        username: '',
        source: 'https://www.reddit.com/r/gifs/comments/68uuuq/out_of_my_room/',
        title: 'cat dragging GIF',
        rating: 'g',
        content_url: '',
        source_tld: 'www.reddit.com',
        source_post_url:
          'https://www.reddit.com/r/gifs/comments/68uuuq/out_of_my_room/',
        is_sticker: 0,
        import_datetime: '2017-05-02 18:18:11',
        trending_datetime: '2017-05-04 04:12:50',
        images: {
          downsized_large: {
            height: '334',
            size: '7958409',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '480',
          },
          fixed_height_small_still: {
            height: '100',
            size: '11757',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/100_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100_s.gif',
            width: '144',
          },
          original: {
            frames: '76',
            hash: '835e67dc254ff3a42b9d219ce10fd93f',
            height: '334',
            mp4:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '1442626',
            size: '7958409',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            webp:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.webp',
            webp_size: '1867802',
            width: '480',
          },
          fixed_height_downsampled: {
            height: '200',
            size: '232509',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.gif',
            webp:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.webp',
            webp_size: '56154',
            width: '287',
          },
          downsized_still: {
            height: '173',
            size: '31467',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy-downsized_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized_s.gif',
            width: '250',
          },
          fixed_height_still: {
            height: '200',
            size: '36185',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_s.gif',
            width: '287',
          },
          downsized_medium: {
            height: '262',
            size: '4824486',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy-downsized-medium.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-medium.gif',
            width: '376',
          },
          downsized: {
            height: '173',
            size: '1762807',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy-downsized.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized.gif',
            width: '250',
          },
          preview_webp: {
            height: '112',
            size: '47638',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy-preview.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.webp',
            width: '161',
          },
          original_mp4: {
            height: '334',
            mp4:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '1442626',
            width: '480',
          },
          fixed_height_small: {
            height: '100',
            mp4:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/100.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.mp4',
            mp4_size: '145541',
            size: '877203',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/100.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.gif',
            webp:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/100.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.webp',
            webp_size: '285786',
            width: '144',
          },
          fixed_height: {
            height: '200',
            mp4:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.mp4',
            mp4_size: '369820',
            size: '2844843',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.gif',
            webp:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.webp',
            webp_size: '713520',
            width: '287',
          },
          downsized_small: {
            height: '132',
            mp4:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy-downsized-small.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-small.mp4',
            mp4_size: '126527',
            width: '189',
          },
          preview: {
            height: '164',
            mp4:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy-preview.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.mp4',
            mp4_size: '36310',
            width: '236',
          },
          fixed_width_downsampled: {
            height: '139',
            size: '122637',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200w_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.gif',
            webp:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200w_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.webp',
            webp_size: '35148',
            width: '200',
          },
          fixed_width_small_still: {
            height: '70',
            size: '6852',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/100w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w_s.gif',
            width: '100',
          },
          fixed_width_small: {
            height: '70',
            mp4:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/100w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.mp4',
            mp4_size: '46562',
            size: '471758',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/100w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.gif',
            webp:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/100w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.webp',
            webp_size: '182448',
            width: '100',
          },
          original_still: {
            height: '334',
            size: '94693',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '480',
          },
          fixed_width_still: {
            height: '139',
            size: '19460',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_s.gif',
            width: '200',
          },
          looping: {
            mp4:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy-loop.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-loop.mp4',
            mp4_size: '4263774',
          },
          fixed_width: {
            height: '139',
            mp4:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.mp4',
            mp4_size: '225885',
            size: '1495442',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.gif',
            webp:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/200w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.webp',
            webp_size: '441096',
            width: '200',
          },
          preview_gif: {
            height: '73',
            size: '48926',
            url:
              'https://media2.giphy.com/media/E0cyxhawhe9dm/giphy-preview.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.gif',
            width: '105',
          },
          '480w_still': {
            url:
              'https://media4.giphy.com/media/E0cyxhawhe9dm/480w_s.jpg?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=480w_s.jpg',
            width: '480',
            height: '334',
          },
        },
        analytics_response_payload:
          'e=Z2lmX2lkPUUwY3l4aGF3aGU5ZG0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1hNDg1YjRjZGJlNjY5MmU0Mzg4MWMyOWJiMThiMDc4MGMzZjZlMmFkYjY5NGMxODA',
        analytics: {
          onload: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=E0cyxhawhe9dm&action_type=SEEN',
          },
          onclick: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=E0cyxhawhe9dm&action_type=CLICK',
          },
          onsent: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=E0cyxhawhe9dm&action_type=SENT',
          },
        },
      },
      {
        type: 'gif',
        id: 'ZE6HYckyroMWwSp11C',
        url:
          'https://giphy.com/gifs/jason-clarke-cat-ears-swoosh-ZE6HYckyroMWwSp11C',
        slug: 'jason-clarke-cat-ears-swoosh-ZE6HYckyroMWwSp11C',
        bitly_gif_url: 'https://gph.is/g/aj1n3Jx',
        bitly_url: 'https://gph.is/g/aj1n3Jx',
        embed_url: 'https://giphy.com/embed/ZE6HYckyroMWwSp11C',
        username: 'jason-clarke',
        source: 'https://twitter.com/catauras/status/1275363180928065538?s=21',
        title: 'Big Ears Cat GIF by Jason Clarke',
        rating: 'g',
        content_url: '',
        source_tld: 'twitter.com',
        source_post_url:
          'https://twitter.com/catauras/status/1275363180928065538?s=21',
        is_sticker: 0,
        import_datetime: '2020-06-23 14:03:58',
        trending_datetime: '2020-07-03 08:50:25',
        images: {
          hd: {
            height: '900',
            mp4:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy-hd.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-hd.mp4',
            mp4_size: '1768944',
            width: '720',
          },
          downsized_large: {
            height: '480',
            size: '7288083',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            width: '384',
          },
          fixed_height_small_still: {
            height: '100',
            size: '7100',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/100_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100_s.gif',
            width: '80',
          },
          original: {
            frames: '60',
            hash: 'bc4653537fdb335de519a215babb24d2',
            height: '480',
            mp4:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '1042514',
            size: '7288083',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.gif',
            webp:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.webp',
            webp_size: '2580024',
            width: '384',
          },
          fixed_height_downsampled: {
            height: '200',
            size: '139464',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.gif',
            webp:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_d.webp',
            webp_size: '78622',
            width: '160',
          },
          downsized_still: {
            height: '240',
            size: '25748',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy-downsized_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized_s.gif',
            width: '192',
          },
          fixed_height_still: {
            height: '200',
            size: '22962',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200_s.gif',
            width: '160',
          },
          downsized_medium: {
            height: '384',
            size: '3927092',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy-downsized-medium.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-medium.gif',
            width: '307',
          },
          downsized: {
            height: '240',
            size: '1426119',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy-downsized.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized.gif',
            width: '192',
          },
          preview_webp: {
            height: '94',
            size: '31482',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy-preview.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.webp',
            width: '76',
          },
          original_mp4: {
            height: '480',
            mp4:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy.mp4',
            mp4_size: '1042514',
            width: '384',
          },
          fixed_height_small: {
            height: '100',
            mp4:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/100.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.mp4',
            mp4_size: '74069',
            size: '301916',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/100.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.gif',
            webp:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/100.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100.webp',
            webp_size: '198800',
            width: '80',
          },
          fixed_height: {
            height: '200',
            mp4:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.mp4',
            mp4_size: '290068',
            size: '1073764',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.gif',
            webp:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200.webp',
            webp_size: '731066',
            width: '160',
          },
          downsized_small: {
            height: '210',
            mp4:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy-downsized-small.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-downsized-small.mp4',
            mp4_size: '147816',
            width: '168',
          },
          preview: {
            height: '236',
            mp4:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy-preview.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.mp4',
            mp4_size: '34172',
            width: '188',
          },
          fixed_width_downsampled: {
            height: '250',
            size: '211420',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200w_d.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.gif',
            webp:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200w_d.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_d.webp',
            webp_size: '119944',
            width: '200',
          },
          fixed_width_small_still: {
            height: '125',
            size: '11007',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/100w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w_s.gif',
            width: '100',
          },
          fixed_width_small: {
            height: '125',
            mp4:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/100w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.mp4',
            mp4_size: '48705',
            size: '475258',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/100w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.gif',
            webp:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/100w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=100w.webp',
            webp_size: '312724',
            width: '100',
          },
          original_still: {
            height: '480',
            size: '145073',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy_s.gif',
            width: '384',
          },
          fixed_width_still: {
            height: '250',
            size: '34189',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200w_s.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w_s.gif',
            width: '200',
          },
          looping: {
            mp4:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy-loop.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-loop.mp4',
            mp4_size: '3427676',
          },
          fixed_width: {
            height: '250',
            mp4:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200w.mp4?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.mp4',
            mp4_size: '432163',
            size: '1666726',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200w.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.gif',
            webp:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/200w.webp?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=200w.webp',
            webp_size: '1101160',
            width: '200',
          },
          preview_gif: {
            height: '83',
            size: '48714',
            url:
              'https://media3.giphy.com/media/ZE6HYckyroMWwSp11C/giphy-preview.gif?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=giphy-preview.gif',
            width: '66',
          },
          '480w_still': {
            url:
              'https://media2.giphy.com/media/ZE6HYckyroMWwSp11C/480w_s.jpg?cid=a485b4cdbe6692e43881c29bb18b0780c3f6e2adb694c180&rid=480w_s.jpg',
            width: '480',
            height: '600',
          },
        },
        user: {
          avatar_url:
            'https://media0.giphy.com/avatars/jason-clarke/Mz4NpmQKMZHv.gif',
          banner_image: '',
          banner_url: '',
          profile_url: 'https://giphy.com/jason-clarke/',
          username: 'jason-clarke',
          display_name: 'Jason Clarke',
          is_verified: false,
        },
        analytics_response_payload:
          'e=Z2lmX2lkPVpFNkhZY2t5cm9NV3dTcDExQyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWE0ODViNGNkYmU2NjkyZTQzODgxYzI5YmIxOGIwNzgwYzNmNmUyYWRiNjk0YzE4MA',
        analytics: {
          onload: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=ZE6HYckyroMWwSp11C&action_type=SEEN',
          },
          onclick: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=ZE6HYckyroMWwSp11C&action_type=CLICK',
          },
          onsent: {
            url:
              'https://giphy-analytics.giphy.com/simple_analytics?response_id=be6692e43881c29bb18b0780c3f6e2adb694c180&event_type=GIF_SEARCH&gif_id=ZE6HYckyroMWwSp11C&action_type=SENT',
          },
        },
      },
    ];
  }
}
