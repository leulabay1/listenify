import { put, takeEvery } from 'redux-saga/effects';
import { toast } from "react-toastify";

import {
  addMusicFailure,
  addMusicSuccess, deleteMusicFailure, deleteMusicSuccess,
  getMusicsFailure,
  getMusicsRequest,
  getMusicsSuccess,
  updateMusicFailure, updateMusicSuccess
} from "../features/music-slice";
import {setEditDeletePopup, turnOffDelete, turnOffEdit} from "../features/toogle-slice";

const url = "https://listenify-backend.vercel.app/musics";

const successToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
}

const errorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
}

function* getMusics() {
  try {
    const musics = yield fetch(url)
      .then(response => response.json());
    yield put(getMusicsSuccess(musics));
  } catch (e) {
    console.log("error", e)
    yield put(getMusicsFailure());
    errorToast("Error while fetching musics");
  }
}

function* addMusic(action) {
  try {

    var {_id, ...otherData} = action.payload;

    var {artist:{_id, ...otherArtistData}, ...other} = otherData

    yield fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        artist: {
          ...otherArtistData
        },
        ...other
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    yield put(addMusicSuccess());
    yield put(getMusicsRequest());
    successToast("Music added successfully");
  } catch (e) {
    yield put(addMusicFailure());
    errorToast("Error while adding music");
  }
}

function* updateMusic(action) {
  try {
    yield fetch(`${url}/${action.payload._id}`, {
      method: 'PUT',
      body: JSON.stringify(action.payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    yield put(updateMusicSuccess())
    yield put(getMusicsRequest());
    yield put(turnOffEdit());
    yield put(setEditDeletePopup(-1));
    successToast("Music updated successfully");
  }catch (e) {
    yield put(updateMusicFailure());
    errorToast("Error while updating music")
  }
}

function* deleteMusic(action) {
  try {
    yield fetch(`${url}/${action.payload}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    yield put(deleteMusicSuccess());
    yield put(getMusicsRequest());
    yield put(turnOffDelete());
    yield put(setEditDeletePopup(-1));
    successToast("Music deleted successfully");
  }catch(e){
    yield put(deleteMusicFailure());
    errorToast("Error while deleting music");
  }
}


function* musicSaga() {
  yield takeEvery('music/getMusicsRequest', getMusics);
  yield takeEvery('music/addMusicRequest', addMusic);
  yield takeEvery('music/updateMusicRequest', updateMusic);
  yield takeEvery('music/deleteMusicRequest', deleteMusic);
}

export default musicSaga