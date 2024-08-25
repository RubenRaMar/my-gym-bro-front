import { PayloadAction } from "@reduxjs/toolkit";
import { SessionData } from "../../../../types";

export const handleUpdateLanguage = (
  currentSessionData: SessionData,
  action: PayloadAction<Pick<SessionData, "languageCode">>
) => ({
  ...currentSessionData,
  ...action.payload,
});
