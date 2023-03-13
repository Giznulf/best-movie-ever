/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReceivingCardsService } from './receiving-cards.service';

describe('Service: ReceivingCards', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceivingCardsService]
    });
  });

  it('should ...', inject([ReceivingCardsService], (service: ReceivingCardsService) => {
    expect(service).toBeTruthy();
  }));
});
