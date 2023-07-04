import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  people: any[] = [];

  addPerson(person: any) {
    this.people.push(person);
  }

  addCharacteristics(characteristics: string[], person: any) {
    person.characteristics = person.characteristics.concat(characteristics);
  }
}
