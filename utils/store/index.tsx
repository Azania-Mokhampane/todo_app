import React from "react";

import { atom } from "recoil";

export const initialState = atom({
  key: "showResults",
  default: false,
});
