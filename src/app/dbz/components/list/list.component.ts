import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterlist: Character[] = [];

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id?: string): void {
    if(!id) return;
    this.onDeleteById.emit(id);
  }
}
