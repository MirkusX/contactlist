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
    image: "",
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { name: (state.name = action.payload) };
    case "email":
      return { email: (state.email = action.payload) };
    case "number":
      return { number: (state.number = action.payload) };
    case "image":
      return { image: (state.image = action.payload) };
  }
};
