import react, { Component } from "react";
import propTypes from "prop-types";
import shortid from "shortid";

const Filter = ({ onChange }) => {
  const a = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <form>
        <label>
          Find contacts by name
          <input type="text" onInput={a}></input>
        </label>
      </form>
    </>
  );
};

Filter.propTypes = {
  value: propTypes.string,
};

export default Filter;
