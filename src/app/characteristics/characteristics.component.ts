import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent {
  @Input() person: any;
  @Output() characteristicsAdded = new EventEmitter<string[]>();

  newCharacteristics: string[] = [];

  addCharacteristic() {
    const characteristic = prompt('Enter a characteristic:');
    if (characteristic) {
      this.newCharacteristics.push(characteristic);
      this.characteristicsAdded.emit(this.newCharacteristics);
    }
  }
}
