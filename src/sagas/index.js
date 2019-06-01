import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import getIP from './ipSagas';
import getUA from './uaSagas';

// prettier-ignore
function *index() {
    yield takeLatest('LOAD_DATA_REQUEST', getIP, axios)
    yield  takeLatest('LOAD_DATA_UA_REQUEST', getUA, axios)
        
}

export default index;
