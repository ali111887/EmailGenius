import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailGenratorComponent } from './email-genrator.component';

describe('EmailGenratorComponent', () => {
  let component: EmailGenratorComponent;
  let fixture: ComponentFixture<EmailGenratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmailGenratorComponent]
    });
    fixture = TestBed.createComponent(EmailGenratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
