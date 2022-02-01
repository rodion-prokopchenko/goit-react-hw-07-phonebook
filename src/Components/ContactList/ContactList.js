import react, { Component } from "react";
import propTypes from "prop-types";
import shortid from "shortid";
import s from "./ContactList.module.css";

export default function ContactList({ filteredContacts, deleteContact }) {
  return (
    <>
      <ul className={s.contactList}>
        {filteredContacts
          ? filteredContacts.map((contacts) => (
              <li
                className={s.contactList__item}
                key={shortid.generate()}
                id={contacts.id}
                onClick={(e) => {
                  if (e.target.nodeName !== "BUTTON") {
                    return;
                  }
                  deleteContact(e.currentTarget.id);
                  console.log(e.currentTarget.id);
                }}
              >
                {contacts.name}: {contacts.phone}
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
