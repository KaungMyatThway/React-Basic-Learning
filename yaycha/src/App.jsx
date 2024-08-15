import { useState } from "react";
import List from "./List.jsx";
import Item from "./Item.jsx";
import Form from "./Form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([
    { id: 1, content: "Hello World", name: "Kaung" },
    { id: 2, content: "Hello World", name: "Myat" },
    { id: 3, content: "Hello World", name: "Thway" },
  ]);

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Yaycha
        <button
          onClick={() => {
            setShowForm(!showForm);
          }}
          style={{
            width: 32,
            height: 32,
            borderRadius: 50,
            background: showForm ? "green" : "red",
            color: "white",
          }}
        >
          {showForm ? "*" : "+"}
        </button>
      </h1>
      {showForm && <Form add={add} />}
      <List>
        {data.map((item) => {
          return <Item key={item.id} item={item} remove={remove} />;
        })}
      </List>
    </div>
  );
}

export default App;
