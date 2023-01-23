//initial state for reducer
export const initialState = [
  {
    name: "",
  },
  {
    email: "",
  },
  {
    number: "",
  },
  {
    url: "",
  },
  {
    category: "",
  },
];

//reducer for storing user input in form

export const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: (state.name = action.payload) };
    case "email":
      return { ...state, email: (state.email = action.payload) };
    case "number":
      return { ...state, number: (state.number = action.payload) };
    case "url":
      return { ...state, url: (state.url = action.payload) };
    case "category":
      return { ...state, category: (state.category = action.payload) };
  }
};
