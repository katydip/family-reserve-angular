import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FlickrComponent } from './flickr.component';

// beforeEachProviders(() => [FlickrComponent]);

describe('FlickrComponent', () => {
  it('should create the app',
      inject([FlickrComponent], (app: FlickrComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'angular2-flickr-observables works!\'',
  //     inject([Angular2FlickrObservablesAppComponent], (app: Angular2FlickrObservablesAppComponent) => {
  //   expect(app.title).toEqual('angular2-flickr-observables works!');
  // }));
});


// describe('QuestionComponent', () => {
//   let component: QuestionComponent;
//   let fixture: ComponentFixture<QuestionComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ QuestionComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(QuestionComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
