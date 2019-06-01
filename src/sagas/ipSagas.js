import { put } from 'redux-saga/effects';

import { loadDataSuccess } from './../actions';

// prettier-ignore
function *getIP(axios){
    const dados = yield axios.get('http://httpbin.org/ip')
    console.log(dados)
    yield put(loadDataSuccess(dados.data.origin))
}

export default getIP;
