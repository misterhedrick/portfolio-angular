import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LanguagesComponent } from './languages.component';
import { LanguagesService } from './languages.service';

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<LanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguagesComponent],
    }).compileComponents();
  });

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LanguagesService],
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
