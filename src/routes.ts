import { EventsListComponent } from "./app/events/events-list.component";
import { CreateEventComponent } from "./app/events/create-event.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { Routes } from '@angular/router'
import {Error404Component} from './app/errors/404.component'
import {EventRouteActivator} from "./app/events/event-details/event-route-activator.component";
export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'}    
]