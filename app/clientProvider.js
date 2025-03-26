// app/ClientProvider.js
"use client";

import { Provider } from "react-redux";
import store from "../store/store";

export default function ClientProvider({ children }) {
  return (
      <div className="w-[100vw]">
        <Provider store={store}>{children}</Provider>
      </div>
  )
}
