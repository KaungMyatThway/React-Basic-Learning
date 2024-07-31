import { useState } from "react";
import List from "./List.jsx";
import Item from "./Item.jsx";


function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello World", name: "Kaung" },
    { id: 2, content: "Hello World", name: "Myat" },
    { id: 3, content: "Hello World", name: "Thway" },
  ]);

  const remove = id => {
    setData(data.filter(item => item.id !== id));
  }

  return (
    <div style={{ margin: "600px auto" }}>
      <h1>Yaycha</h1>
      <List>
          {
            data.map(item => {
              return <Item key={item.id} item={item} remove={remove} />
            })
          }
      </List>
    </div>
  );
}

export default App;
