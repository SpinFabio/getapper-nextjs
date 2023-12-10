import React, { memo } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/spas/admin-dashboard/redux-store";
import App from "./App";

const AppWrapper = () => {
  return (
    /*
    provider e Persist gate sono solo dei contesti che servono
    Persist gate permette di salavre lo stato dell' applicazione nella
    Ram del client così che ogni volta che viene ricaricata la pagina del front end sul client
    non c'è bisogno di contattare il server o farw query sulla base di diati
     */
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default memo(AppWrapper);
