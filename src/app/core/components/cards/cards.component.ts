import { Input, Component, OnInit } from '@angular/core';

import { Card } from '../../models/card';
import { GenresOfFilms } from '../../enums/genresOfFilms.enum';
import { PageWithCardsComponent } from '../page-with-cards/page-with-cards.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor(private pageWithCardsComponent: PageWithCardsComponent) {}

  @Input() card!: Card;

  genres: string = '';
  favorite: string = 'off';

  getGenreToString() {
    for (let i of this.card.genre) {
      this.genres = this.genres.concat(GenresOfFilms[i - 1], ', ');
    }
    this.genres = this.genres.slice(0, -2);
  }

  changeFavorite(card: Card) {
    let newCardFavorite = JSON.stringify(card);
    if (newCardFavorite != localStorage.getItem('favorite')) {
      localStorage.setItem('favorite', newCardFavorite);
      this.favorite = 'on';
    } else {
      localStorage.removeItem('favorite');
      this.favorite = 'off';
    }

    this.pageWithCardsComponent.getCardFavorite();
  }

  ngOnInit() {
    this.getGenreToString();
  }
}
