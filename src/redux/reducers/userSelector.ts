import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectSelf = (state: RootState) => state;

export const selectUser = createDraftSafeSelector(
  selectSelf,
  (state) => state.user
);
export const selectCurrentUser = createDraftSafeSelector(
  selectUser,
  (state) => state.currentUser
);
