import {
  FETCH_ALBUM_ERROR,
  FETCH_ALBUM_FAILURE,
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
} from "../action/fetchtypes";

const initialState = {
  loading: false,
  albums: {},
  error: "",
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALBUM_SUCCESS:
      return {
        loading: false,
        albums: action.payload,
        error: "",
      };
    case FETCH_ALBUM_FAILURE:
      return {
        loading: false,
        albums: {},
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default albumReducer;
