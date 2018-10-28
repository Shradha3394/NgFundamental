import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    templateUrl: "./create-session.component.html",
    styles: [`
        em { float: right; color: red; }
    `]
})

export class CreateSessionComponent implements OnInit {

    newSessionForm: FormGroup
    name
    presenter
    level
    duration
    abstract

    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues) {
        console.log(formValues)
    }
}