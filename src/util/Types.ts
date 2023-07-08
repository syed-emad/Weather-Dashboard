export interface IDropDown {
  key: number;
  value: string;
}

export interface ICitiesFilter {
  country: string;
  searchText: string;
}

export interface INotification {
  error: number;
  message: string;
  show: boolean;
}
