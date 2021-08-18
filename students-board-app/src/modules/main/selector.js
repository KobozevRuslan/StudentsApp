import { createSelector } from 'reselect';

export const selectAppState = state => state.app;

export const selectorCard = createSelector(selectAppState, state => state.card);
