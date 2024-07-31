import { useRef } from "react";

function Form({ add }) {
  const contentRef = useRef();
  const nameRef = useRef();
  return (
    <form>
      <input ref type="text" placeholder="Content"></input>
      <input type="text" placeholder="Name"></input>
      <button type="submit">Post</button>
    </form>
  );
}

export default Form;
