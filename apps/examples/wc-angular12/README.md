# WcAngular12

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Using Web Components in Angular 12 apps

### Install your web component package

`yarn add @justeattakeaway/pie-button`

### Import and use the component

To import a web component into Angular we must import the `CUSTOM_ELEMENTS_SCHEMA` from the `@angular/core` package, and then use it in the `schemas` property in `app.module.ts`. (more information about it [look here](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA).)

```
// app.module.ts

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }

```

Import the web component into `app.component.ts` and add any js functions and variables needed to make the component work as needed.

```
// app.component.ts
import { BUTTON_SIZE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

export class AppComponent {
  count = 0;

  increment () {
    this.count ++;
  }
};

```

Add the web component to `app.component.html`.

```
<div>
    <pie-button @click="increment" />
</div>
```
For a complete example refer to `app.component.ts` and `app.module.ts`.

For further information about it [look here](https://www.thisdot.co/blog/how-to-integrate-web-components-using-lit-in-angular). 
