export const useLocalStorage = (key, value) => {
  if (value === undefined) {
    return JSON.parse(localStorage.getItem(key));
  }

  localStorage.setItem(key, JSON.stringify(value));
  return value;
};
