import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JogadorComponent } from "./jogador/jogador.component";
import { NgFor, NgStyle } from '@angular/common';
import { JogadorModel } from './jogador.model';
import { CaminhoJogo } from './caminho-jogo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JogadorComponent, NgFor, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'segundoprojeto';
//  jogadores: string[] = ['jogador1',  'jogador2', 'jogador3', 'jogador4'];
  jogadores: JogadorModel [] = []; 
  quadradinhos: CaminhoJogo [] = [];
  ngOnInit(): void
  {
   const jogador1 = new JogadorModel("red",'TopoEsquerda');
   const jogador2 = new JogadorModel("orange",'TopoDireita');
   const jogador3 = new JogadorModel("green",'BaseEsquerda');
   const jogador4 = new JogadorModel("blue",'BaseDireita');
   
   this.jogadores.push(jogador1);
   this.jogadores.push(jogador2);
   this.jogadores.push(jogador3);
   this.jogadores.push(jogador4);

   // Criando os Quadradinhos
   for (let i = 0; i < 4; i++) {
    const quadradinho = new CaminhoJogo(false, false, 'black', '50px', '50px', [], `${i * 20}`, '1px');
    this.quadradinhos.push(quadradinho);
  }
}
}