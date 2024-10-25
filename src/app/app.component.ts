import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { JogadorModel } from './jogador.model';
import { MatIconModule } from '@angular/material/icon';
import { CaminhoJogo } from './caminho-jogo.model';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, NgStyle, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  jogadores: JogadorModel[] = [];
  ListaQuadradinhosCaminhoAzulSuperior: CaminhoJogo[] = [];
 
  /* quadradinhos das entradas das casinhas*/
  // quadradinhoentradaAzul = new CaminhoJogo(false, true, 'red', '20px', '20px', [], '84px', '33px', '0px', '0px', 0);
  // quadradinhoentradaVerde = new CaminhoJogo(false, true, 'red', '20px', '20px', [], '26px', '80px', '0px', '0px', 0);
  // quadradinhoentradaVermelho = new CaminhoJogo(false, true, 'red', '20px', '20px', [], '-2px', '33px', '0px', '0px', 0);
  // quadradinhoentradaRoxo = new CaminhoJogo(false, true, 'red', '20px', '20px', [], '26px', '0px', '0px', '0px', 0);
  ngOnInit(): void {
 
    const jogador1 = new JogadorModel("rgb(95, 6, 179)", 'TopoEsquerda');
    const jogador2 = new JogadorModel("#bbcc00", 'TopoDireita');
    const jogador3 = new JogadorModel("red", 'BaseEsquerda');
    const jogador4 = new JogadorModel("green", 'BaseDireita');
 
    this.jogadores.push(jogador1);
    this.jogadores.push(jogador2);
    this.jogadores.push(jogador3);
    this.jogadores.push(jogador4);
 
    for (let i = 0; i < 5; i++) {
      const QuadradinhoLilasCaminhoEsquerdo: CaminhoJogo = new CaminhoJogo(false, false, 'black', '50px', '30px', [], '0px', '0px', '0px', `${i * 21}px`, i + 1);
      this.ListaQuadradinhosCaminhoAzulSuperior.push(QuadradinhoLilasCaminhoEsquerdo);
 
      // const QuadradinhoLilasCaminhoDireito: CaminhoJogo = new CaminhoJogo(false, false, 'black', '50px', '50px', [], '0px', `${i * 21}px`, '0px', '0px', i + 1);
      // this.ListaQuadradinhosCaminhoAzulSuperior.push(QuadradinhoLilasCaminhoDireito);
 
    }
 
 
  }
}
