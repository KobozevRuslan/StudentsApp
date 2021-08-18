import { createSelector } from 'reselect';

export const selectAppState = state => state.app;

export const selectorGetCourses = createSelector(selectAppState, state => state.coursesPage);
