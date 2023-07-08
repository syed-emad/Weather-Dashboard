import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INotification } from "../../../util/Types";
import { RootState } from "../store";
import { IRapidAPIRejectValue, IThunk } from "../storeTypes";
import { AxiosError } from "axios";

interface NotificateionState {
  notification: INotification;
}
const initialState: NotificateionState = {
  notification: {} as INotification,
};

export const ShowNotification = createAsyncThunk<
  INotification,
  { notification: INotification },
  IThunk
>(
  "/notification/show",
  async ({ notification }, { dispatch, rejectWithValue }) => {
    try {
      setTimeout(() => {
        dispatch(ClearNotification({ notification }));
      }, 2000);
      return notification;
    } catch (err: AxiosError | unknown) {
      let error: AxiosError<IRapidAPIRejectValue> =
        err as AxiosError<IRapidAPIRejectValue>;
      if (!error.response) throw err;
      return rejectWithValue(error.response);
    }
  }
);

export const ClearNotification = createAsyncThunk<
  INotification,
  { notification: INotification },
  IThunk
>(
  "/notification/clear",
  async ({ notification }, { dispatch, rejectWithValue }) => {
    try {
      return { ...notification, show: false };
    } catch (err: AxiosError | unknown) {
      let error: AxiosError<IRapidAPIRejectValue> =
        err as AxiosError<IRapidAPIRejectValue>;
      if (!error.response) throw err;
      return rejectWithValue(error.response);
    }
  }
);
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
