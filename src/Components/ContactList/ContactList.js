import react, { Component } from "react";
import propTypes from "prop-types";
import shortid from "shortid";
import s from "./ContactList.module.css";

export default function ContactList({
  filteredContacts,
  deleteContact,
  isFetching,
}) {
  return (
    <>
      <ul className={s.contactList}>
        {isFetching && <h1>Загружаю</h1>}
        {filteredContacts
          ? filteredContacts.map((contacts) => (
              <li
                className={s.contactList__item}
                key={contacts.id}
                id={contacts.id}
                onClick={async (e) => {
                  if (e.target.nodeName !== "BUTTON") {
                    return;
                  }
                  try {
                    await deleteContact(e.currentTarget.id);
                  } catch {
                    console.log("не получилось удалить");
                  }
                }}
              >
                {contacts.name}: {contacts.number}
                <button type="button" className={s.contactList__button}>
                  Delete
                </button>
              </li>
            ))
          : null}
      </ul>
    </>
  );
}
