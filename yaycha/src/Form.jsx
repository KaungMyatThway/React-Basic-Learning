import { useRef } from "react";

function Form({ add }) {
  const contentRef = useRef();
  const nameRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const content = contentRef.current.value;
        const name = nameRef.current.value;

        add (content, name);

        e.currentTarget.reset();
      }}
    >
      <input
        ref={contentRef}
        type="text"
        placeholder="Content"
        style={{ padding: 5 }}
      ></input>
      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
        style={{ padding: 5 }}
      ></input>
      <button type="submit">Post</button>
    </form>
  );
}

export default Form;
