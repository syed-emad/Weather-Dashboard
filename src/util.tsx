let debounceTimeout: any;
export const debounce = (callback: any, delay: number) => {
  if (debounceTimeout == null) {
    debounceTimeout = setTimeout(callback, 0);
  } else {
    clearTimeout(debounceTimeout);
    setTimeout(callback, delay);
    debounceTimeout = null;
  }
  console.log(debounceTimeout);
};
