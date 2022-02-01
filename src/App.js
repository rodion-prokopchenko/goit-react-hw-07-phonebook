import s from "./App.module.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import react from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  addContact,
  deleteContact,
} from "./Components/redux/contact-actions";
import {
  getContacts,
  getValueFilter,
  getVisibleContacts,
  getContactsA,
} from "./Components/redux/contact-selectors";
import {
  useFetchContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from "./Components/API/contactAPI";

export default function App() {
  const { data, isFetching } = useFetchContactQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getValueFilter);
  const getVisibleContacts = (contacts) => {
    if (filter === "") return contacts;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filterStore = getVisibleContacts(data);

  console.log(data);
  console.log(isFetching);
  console.log("c", data);
  console.log("f", filterStore);

  const dispatch = useDispatch();
  const onChangeFilter = (e) => dispatch(changeFilter(e));

  function compairContacts(e) {
    if (!data) return;
    if (data.some(({ name }) => name === e)) {
      return true;
    }
  }

  return (
    <div className={s.app}>
      <ContactForm compairContacts={compairContacts} />
      <h2>Contacts</h2>
      <Filter onChange={onChangeFilter} contacts={data} />
      <ContactList
        deleteContact={deleteContact}
        filteredContacts={filterStore}
        isFetching={isFetching}
      />
    </div>
  );
}

// export default contactFromB
// const getVisibleContacts = async () => {
//   const normalizedFilter = filter.toLowerCase();
//   try {
//     await data;
//     data.filter(
//       ({ name }) => name.toLowerCase().includes(normalizedFilter),
//       console.log(
//         data.filter(({ name }) =>
//           name.toLowerCase().includes(normalizedFilter)
//         )
//       )
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
