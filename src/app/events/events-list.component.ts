import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    template:`
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
        <h2>{{thumbnail.propperty}}</h2>
        <button class="btn btn-primary" (click)="thumbnail.handleClickMe()">Click Me!</button>
    </div>
    `
})
export class EventListComponent{
    event1 = {
        id:1,
        name: 'Angular Connect',
        date: '9/23/2018',
        time: '2:50 pm',
        price: 600,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location:
        {
            address: '1057 DT',
            city:'London',
            country:'England    '
        }
    }


}