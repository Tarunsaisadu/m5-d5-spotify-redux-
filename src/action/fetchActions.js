import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
} from "./fetchtypes";
import axios from "axios";

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

export const fetchAlbumsAction = (albumid) => {
  return (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/75621062"
      );

      if (response.ok) {
        let album = await response.json();
        console.log(album);
        dispatch({
          type: "FETCH_ALBUM_SUCCESS",
          payload: album,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
