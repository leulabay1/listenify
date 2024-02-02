import { put, takeEvery } from 'redux-saga/effects';
import {
  addMusicSuccess, deleteMusicFailure, deleteMusicSuccess,
  getMusicsFailure,
  getMusicsRequest,
  getMusicsSuccess,
  updateMusicFailure, updateMusicSuccess
} from "../features/music-slice";

const url = "https://localhost:3000/musics";

function* getMusics() {
  try {
    const musics = yield fetch(url)
      .then(response => response.json());
    yield put(getMusicsSuccess(musics));

  } catch (e) {
    yield put(getMusicsFailure());
  }
}

function* addMusic(action) {
  try {
    yield fetch(url, {
      method: 'POST',
      body: JSON.stringify(action.payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    yield put(addMusicSuccess())
    yield put(getMusicsRequest());
  } catch (e) {
    yield put(getMusicsFailure());
  }
}

function* updateMusic(action) {
  try {
    yield fetch(url, {
      method: 'PUT',
      body: JSON.stringify(action.payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    yield put(updateMusicSuccess())
    yield put(getMusicsRequest());
  }catch (e) {
    yield put(updateMusicFailure());
  }
}

function* deleteMusic(action) {
  try {
    yield fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(action.payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    yield put(deleteMusicSuccess());
    yield put(getMusicsRequest());
  }catch(e){
    yield put(deleteMusicFailure());
  }
}


function* musicSaga() {
  yield takeEvery('music/getMusicsRequest', getMusics);
  yield takeEvery('music/addMusicRequest', addMusic);
  yield takeEvery('music/updateMusicRequest', updateMusic);
  yield takeEvery('music/deleteMusicRequest', deleteMusic);
}