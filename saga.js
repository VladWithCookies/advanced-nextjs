import { all, delay, takeLatest } from 'redux-saga/effects'

function* increment() {
  yield delay(1000);
  console.log('hi, from redux saga');
}

function* decrement() {
  yield delay(1000);
  console.log('hi, from redux saga');
}

function* saga() {
  yield all([
    yield takeLatest('INCREMENT', increment),
    yield takeLatest('DECREMENT', decrement)
  ])
}

export default saga;
