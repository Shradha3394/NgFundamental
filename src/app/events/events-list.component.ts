import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventListComponent{
    event = {
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