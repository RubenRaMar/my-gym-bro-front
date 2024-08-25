import { createSlice } from "@reduxjs/toolkit";
import { initialSessionData } from "../../constants/sessionData/sessionData";
import { handleUpdateLanguage } from "./stateHandlers/language/language";

const sessionDataSlice = createSlice({
  initialState: initialSessionData,
  name: "sessionData",
  reducers: {
    updateLanguage: handleUpdateLanguage,
  },
});

export const { updateLanguage: updateLanguageActionCreator } =
  sessionDataSlice.actions;

export const sessionDataReducer = sessionDataSlice.reducer;
