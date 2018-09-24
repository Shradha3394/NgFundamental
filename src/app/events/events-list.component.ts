import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    template:`
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <event-thumbnail [event]="event1" (eventClick)="hadleEventClicked($event)"></event-thumbnail>
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

    hadleEventClicked(data)
    {
        console.log("Received: " + data)
    }
}