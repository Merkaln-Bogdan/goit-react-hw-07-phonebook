import { createSelector } from "@reduxjs/toolkit";
const getActions = (state) => state.actions.item;

const getFilter = (state) => state.actions.filter;
const visibleContacts = createSelector(
  [getActions, getFilter],
  (actions, filter) => {
    return actions.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getActions,
  getFilter,
  visibleContacts,
};
