import { SquadService } from './../shared/services/squad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  fieldBlanks: boolean = true;
  values: string = '';
  sorteados: number[] = [];
  num!: number;

  gerar() {
    const nomes = this.values.split('\n');
    this.squadService.sortearMembros
  }

  constructor(private squadService: SquadService) {
  }

  ngOnInit(): void {
  }

}
