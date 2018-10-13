import { Injectable } from "@angular/core"
import { Resolve } from "@angular/router"
import { EventService } from "./shared/event.service"
import { map } from "rxjs/operators"

@Injectable()
export class EventListResolver implements Resolve<any>{

    constructor(private EventService: EventService) {

    }
    resolve() {
        return this.EventService.getEvents().pipe(map(events => events))
    }

}