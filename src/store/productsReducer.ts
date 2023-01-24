type State = {
  tag: string;
  searchInputValue: string;
  products: {}[];
  errorMsg: string;
};

type Action = {
  type: string;
  payload?: string | [];
};

export default function productsReducer(state: State, action: Action) {
  switch (state.tag) {
    case "idle": {
      switch (action.type) {
        case "FETCH": {
          return {
            ...state,
            tag: "loading",
          };
        }
        case "CHANGE_INPUT": {
          return {
            ...state,
            searchInputValue: action.payload,
          };
        }
        default: {
          return state;
        }
      }
    }
    case "loading": {
      switch (action.type) {
        case "FETCH_SUCCESS": {
          return {
            ...state,
            tag: "loaded",
            products: action.payload as [],
            errorMsg: "",
            searchInputValue: "",
          };
        }
        case "FETCH_EMPTY": {
          return {
            ...state,
            tag: "empty",
            products: [],
            errorMsg: "",
            searchInputValue: "",
          };
        }
        case "FETCH_ERROR": {
          return {
            ...state,
            tag: "error",
            products: [],
            errorMsg: action.payload,
            searchInputValue: "",
          };
        }
        default: {
          return state;
        }
      }
    }
    case "loaded": {
      switch (action.type) {
        case "CHANGE_INPUT": {
          return {
            ...state,
            searchInputValue: action.payload,
          };
        }
        case "SEARCH": {
          return {
            ...state,
            tag: "loading",
          };
        }
      }
    }
    case "empty": {
      switch (action.type) {
        case "CHANGE_INPUT": {
          return {
            ...state,
            searchInputValue: action.payload,
          };
        }
        case "SEARCH": {
          return {
            ...state,
            tag: "loading",
          };
        }
      }
    }
    case "error": {
      switch (action.type) {
        case "CHANGE_INPUT": {
          return {
            ...state,
            searchInputValue: action.payload,
          };
        }
        case "SEARCH": {
          return {
            ...state,
            tag: "loading",
          };
        }
      }
    }
    default: {
      return state;
    }
  }
}
