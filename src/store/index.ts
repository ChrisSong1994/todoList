import * as React from 'react';
import { State } from '../type';

const defaultState: State = {
  todoList: [],
};

export const StateContext = React.createContext(defaultState);
