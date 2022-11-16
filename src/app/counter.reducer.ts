import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, upIncrement } from './counter.actions';

export const initialState = {
  count: 33,
  title: 'hello',
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ count: state.count + 1, title: 'increment' })),
  on(decrement, (state) => ({ count: state.count - 1, title: 'decrement' })),
  on(reset, (state) => ({ count: 0, title: 'reset' })),
  on(upIncrement, (state) => ({ count: state.count + 2, title: 'upIncrement' }))
);
