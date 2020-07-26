import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaPage } from './manga.page';

describe('MangaPage', () => {
  let component: MangaPage;
  let fixture: ComponentFixture<MangaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
