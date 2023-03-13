import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { ReceivingCardsService } from '../../services/receiving-cards.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-page-with-cards',
  templateUrl: './page-with-cards.component.html',
  styleUrls: ['./page-with-cards.component.scss'],
})
export class PageWithCardsComponent implements OnInit {
  constructor(private receivingCardsService: ReceivingCardsService) {}

  selected = 'Все';
  cards: Card[] = [];
  favoriteMovieSelected: boolean = true;
  cardFavorite: Card = JSON.parse(
    localStorage.getItem('favorite') || JSON.stringify(new Card())
  );

  getAllColumn() {
    this.receivingCardsService
      .getCards()
      .pipe(
        map((cards) => {
          console.log(cards);
          this.cards = cards;
        })
      )
      .subscribe(() => {});
  }

  getCardFavorite() {
    this.cardFavorite = JSON.parse(
      localStorage.getItem('favorite') || JSON.stringify(new Card())
    );
    if (this.cardFavorite.id == undefined) this.favoriteMovieSelected = false;
    else this.favoriteMovieSelected = true;
  }

  ngOnInit() {
    this.getAllColumn();
    if (this.cardFavorite.id == undefined) this.favoriteMovieSelected = false;
  }
}
