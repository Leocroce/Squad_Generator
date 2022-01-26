import { NumberInput } from '@angular/cdk/coercion';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquadService {
  num!: number;

  constructor() { }

  sortearMembros(nomes: string[]): Observable<string> {
    return new Observable((subscriber) => {
        const sorteado = Math.floor(Math.random() * nomes.length);
        console.log(sorteado);

        for(let i = 0; i < this.num; i++) {
          subscriber.next(nomes[sorteado]);
        }
    })
  }
}

