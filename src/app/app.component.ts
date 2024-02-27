import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { HoverComponent } from './hover/hover.component';
import { IdleComponent } from './idle/idle.component';
import { ImmediateComponent } from './immediate/immediate.component';
import { InteractionComponent } from './interaction/interaction.component';
import { MultipleComponent } from './multiple/multiple.component';
import { PrefetchedComponent } from './prefetched/prefetched.component';
import { TimerComponent } from './timer/timer.component';
import { ViewportComponent } from './viewport/viewport.component';
import { WhenComponent } from './when/when.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NonStandaloneModule } from './non-standalone/non-standalone.module';

enum Trigger {
  idle = 'Idle',
  viewport = 'Viewport',
  interaction = 'Interaction',
  hover = 'Hover',
  immediate = 'Immediate',
  timer = 'Timer',
  when = 'When',
  multiple = 'Multiple',
  prefetched = 'Prefetched'
}

const viewportExtras = Array(4).fill(
  'Scroll down to see the deferred component'
);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, HoverComponent, IdleComponent,ImmediateComponent,InteractionComponent,
    MultipleComponent, NonStandaloneModule, PrefetchedComponent, TimerComponent, ViewportComponent, WhenComponent, ReactiveFormsModule]
})
export class AppComponent {
  Trigger = Trigger;
  currentTab = Trigger.idle;
  triggers = Object.values(Trigger);
  viewportExtras = viewportExtras;

  whenCondition = new FormControl(1, { nonNullable: true });
  whenConditionMultiple = new FormControl(1, { nonNullable: true });
}
