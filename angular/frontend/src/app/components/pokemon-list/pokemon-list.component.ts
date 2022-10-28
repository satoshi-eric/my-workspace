import { PokemonApiService } from './../../services/pokemon-api.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = []

  constructor(private apiService: PokemonApiService) { }

  ngOnInit(): void {
    this.apiService.listPokemon().subscribe(response => {
      this.pokemons = response
    })
  }

}
