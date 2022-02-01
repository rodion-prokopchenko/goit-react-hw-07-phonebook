import { createSelector } from "@reduxjs/toolkit";
import { useFetchContactQuery } from "../API/contactAPI";

export const getValueFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

// export const getVisibleContacts = createSelector(
//   [getContacts, getValueFilter],
//   (contacts, valueFilter) => {
//     const normalizedFilter = valueFilter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );

// export const getVisibleContacts = (state) => {
//   // const { data, isFetching } = useFetchContactQuery();

//   const contacts = getContacts(state);
//   const filter = getValueFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
