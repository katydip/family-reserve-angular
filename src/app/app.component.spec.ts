import { TestBed, async, beforeEachProviders,
  describe,
  expect,
  it,
  inject } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

beforeEachProviders(() => [AppComponent]);

describe('App: Angular2FlickrObservables', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'angular2-flickr-observables works!\'',
  //     inject([Angular2FlickrObservablesAppComponent], (app: Angular2FlickrObservablesAppComponent) => {
  //   expect(app.title).toEqual('angular2-flickr-observables works!');
  // }));
});

