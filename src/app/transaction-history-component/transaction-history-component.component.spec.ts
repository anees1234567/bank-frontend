import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHistoryComponentComponent } from './transaction-history-component.component';

describe('TransactionHistoryComponentComponent', () => {
  let component: TransactionHistoryComponentComponent;
  let fixture: ComponentFixture<TransactionHistoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionHistoryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionHistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
