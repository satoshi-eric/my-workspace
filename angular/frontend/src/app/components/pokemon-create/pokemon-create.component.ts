import { PokemonApiService } from './../../services/pokemon-api.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.css']
})
export class PokemonCreateComponent implements OnInit {

  pokemon: Pokemon = {
    id: 0,
    name: "",
    type: ""
  }

  constructor(private apiService: PokemonApiService) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.apiService.createPokemon(this.pokemon).subscribe(() => {
      this.apiService.showMessage("Pokemon created!")
    })
  }

}
