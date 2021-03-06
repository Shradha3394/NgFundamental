import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { appRoutes } from '../routes'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import {
  CreateEventComponent,
  EventListResolver,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventService,
  CreateSessionComponent,
  SessionListComponent
} from './events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent,
    EventDetailsComponent, CreateEventComponent, Error404Component, CreateSessionComponent,
    SessionListComponent
  ],
  providers: [
    EventService,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  return component.isDirty ? window.confirm('You have not saved this event, do you really want to cancel?') : true;
}
