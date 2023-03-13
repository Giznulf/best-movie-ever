import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ReceivingCardsService {
  constructor(private httpService: HttpService) {}

  getCards() {
    return this.httpService
      .get('data.json')
      .pipe(catchError(async () => console.log('Ошибка.')));
  }
}
