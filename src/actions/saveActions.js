import * as types from './actionTypes';
import SavesApi from '../api/SavesApi';

export function fetchSaves() {
  return (dispatch) => {
    dispatch({type: types.FETCH_SAVES});

    SavesApi.fetchAllSaves().then((saves) => {
      dispatch({type: types.FETCH_SAVES_FULFILLED, saves});
    }).catch((error) => {
      dispatch({type: types.FETCH_SAVES_REJECTED, error})
    });
  };
}

export function addSave(save) {
  return {type: types.ADD_SAVE, save}
}
export function createSave(save) {
  return (dispatch) => {
    SavesApi.createSave(save).then((responseSave) => {
        console.log(`SAVED...${responseSave.id}`)
        console.log(responseSave)
      dispatch(addSave(responseSave));
      return responseSave;
    }).catch((error) => {
      throw(error);
    });
  };
}

export function deleteSaveSuccess(save) {
  return {type: types.DELETE_SAVE, save}
}
export function deleteSave(save) {
  return (dispatch) => {
    SavesApi.deleteSave(save).then(() => {
        console.log(`DELETED...${save.id}`)
        console.log(save)
      dispatch(deleteSaveSuccess(save));
      return;
    }).catch(error => {
      throw(error);
    });
  };
}
