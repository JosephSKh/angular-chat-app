import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DotDotDotPipe } from './dotdotdot.pipe';

describe('DOTPipeTest', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();
  });

  it('Pipe Test', () => {
    const pipe = new DotDotDotPipe();
    const newValue = pipe.transform('Hello');
    expect(newValue).toBe('Hello ...');
  });
});
