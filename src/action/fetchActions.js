import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
} from "./fetchtypes";

export const fetchalbumRequest = () => {
  return {
    type: FETCH_ALBUM_REQUEST,
  };
};

const fetchalbumSuccess = () => {
  return {
    type: FETCH_ALBUM_SUCCESS,
    payload: albums,
  };
};

const fetchalbumFailure = () => {
  return {
    type: FETCH_ALBUM_FAILURE,
    payload: error,
  };
};
