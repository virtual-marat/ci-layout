import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import settings, { sagas as StartSagas } from './StartPage';
import { sagas as SettingsSagas } from './SettingsPage';
import builds, { sagas as HistorySagas } from './HistoryPage';
import { build, log, sagas as BuildSagas } from './BuildPage';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  settings,
  builds,
  build,
  log,
  form: formReducer
});

export function* rootSaga() {
  yield fork(StartSagas);
  yield fork(SettingsSagas);
  yield fork(HistorySagas);
  yield fork(BuildSagas);
}
