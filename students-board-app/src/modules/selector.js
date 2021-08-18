import { createSelector } from 'reselect';

export const selectAppState = state => state.app;

export const selectorPageInfo = createSelector(selectAppState, state => state.pageInfo);

export const selectAuthState = state => state.auth;

export const selectorIsAuthorised = createSelector(selectAuthState, state => state.isAuthorised);
