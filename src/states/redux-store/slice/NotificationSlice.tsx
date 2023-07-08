import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INotification } from "../../../util/Types";
import { RootState } from "../store";
import { IThunk } from "../storeTypes";

interface NotificateionState {
  notification: INotification;
}
const initialState: NotificateionState = {
  notification: {} as INotification,
};

export const ShowNotification = createAsyncThunk<
  any,
  { notification: INotification },
  IThunk
>("/notification/show", async ({ notification }, { dispatch }) => {
  try {
    // dispatch(showNotification(notification));
    setTimeout(() => {
      console.log("i am dispatching celaringnow");
      dispatch(ClearNotification({ notification }));
    }, 2000);
    return notification;
  } catch (e) {
    console.log("errorrrr", e);
  }
});

export const ClearNotification = createAsyncThunk<
  any,
  { notification: INotification },
  IThunk
>("/notification/clear", async ({ notification }, { dispatch }) => {
  try {
    return { ...notification, show: false };
  } catch (e) {
    console.log("errorrrr", e);
  }
});
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ShowNotification.fulfilled, (state, action) => {
        state.notification = action?.payload;
      })
      .addCase(ClearNotification.fulfilled, (state, action) => {
        state.notification = action?.payload;
      });
  },
});

export const CurrentNotification = (state: RootState) =>
  state.notification.notification;
export const notificationReducer = notificationSlice.reducer;
