import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

let httpTestingController: HttpTestingController;
let service: DataService;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DataService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
});

it('should make a call to get the data service', () => {
  httpTestingController = TestBed.inject(HttpTestingController);
  service = TestBed.inject(DataService);
  const getDataSpy = spyOn(service, 'getData');
  service.getData();

  expect(getDataSpy).toHaveBeenCalledTimes(1);
});

it('should throw 404 error', () => {
  httpTestingController = TestBed.inject(HttpTestingController);
  service = TestBed.inject(DataService);
  service.getData().subscribe(
    () => fail('Should have failed with a 404 error'),
    (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404);
      expect(error.error).toContain('404 error');
    }
  );
  const request = httpTestingController.expectOne('./assets/data.json');
  request.flush('404 error', { status: 404, statusText: 'Not Found' });
});
