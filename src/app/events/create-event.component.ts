import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { format } from 'util';
import { EventService } from './shared';
@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
      em { float: right; color: red; }
      .error input {background-color:#E3C3C5}
  `]
})

export class CreateEventComponent {
  isDirty: boolean = true
  newEvent
  constructor(private router: Router, private eventService: EventService) {

  }
  Cancel() {
    this.router.navigate(['/events'])
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }
}
