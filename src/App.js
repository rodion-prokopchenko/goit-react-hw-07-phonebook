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
} from "./Components/redux/contact-selectors";
import {
  useFetchContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from "./Components/API/contactAPI";

export default function App() {
  const { data, isFetching } = useFetchContactQuery();
  const [addContact, { isLoading }] = useAddContactMutation();
  const [deleteContact] = useDeleteContactMutation();

  console.log(data);
  const contacts = useSelector(getContacts);
  const filterStore = useSelector(getVisibleContacts);

  console.log("c", contacts);
  console.log("f", filterStore);

  const dispatch = useDispatch();

  // const onDeleteContact = (id) => dispatch(deleteContact(id));
  const onChangeFilter = (e) => dispatch(changeFilter(e));

  function compairContacts(e) {
    if (!contacts) return;
    if (contacts.some(({ name }) => name === e)) {
      return true;
    }
  }

  return (
    <div className={s.app}>
      <ContactForm addContact={addContact} compairContacts={compairContacts} />
      <h2>Contacts</h2>
      <Filter onChange={onChangeFilter} />
      <ContactList
        deleteContact={deleteContact}
        filteredContacts={filterStore}
      />
    </div>
  );
}
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
