import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date:{{event.date}}</div>
        <div>Time:{{event.time}}</div>
        <div>Price:\${{event.price}}</div>
        <div>Location:{{event.location.address + " " + event.location.city  + ", " +  event.location.country}}</div>

    </div>
    `
})

export class EventThumbnailComponent
{
    @Input() event:any
    propperty:any = "some value"
    handleClickMe()
    {
        console.log(this.event.name)
    }
}