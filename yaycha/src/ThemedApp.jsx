import { createContext,useState } from "react";
import App from "./App";

export const AppContext = createContext();

export default function ThemedApp() {
  const [mood, setMood] = useState("dark");
  return (
    <AppContext.Provider value={{ mood, setMood }}>
      <App />
    </AppContext.Provider>
  );
}
