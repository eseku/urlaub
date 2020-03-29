import React from "react";

import { AuthNavigator, AppNavigator } from "~/screens";
import { getStore, setStore } from "~/context/storage";

const RootNavigator = () => {
  const isLoggedIn = true;

  // getStore("key", (error, item) => {
  //   if (item) {
  //     isLoggedIn = item;
  //   }

  //   // console.log(isLoggedIn);
  // });

  return (
    <>
      {isLoggedIn && <AppNavigator />}
      {!isLoggedIn && <AuthNavigator />}
    </>
  );
};

export default RootNavigator;
