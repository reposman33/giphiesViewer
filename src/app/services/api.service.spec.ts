import { TestBed } from '@angular/core/testing';

import { APIService } from './api.service';

describe('APIService', () => {
  let service: APIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should make a valid request', () => {
    const APIKey = 'BDB545KL5J4L';
    const contentRating = 'G';
    expect(service.get('https://api.giphy.com/v1/gifs/search?api_key=${this.APIKey}&rating=${this.contentRating}&q=kittens')).toBe
  }
});
