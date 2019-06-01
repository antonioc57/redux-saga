import { put } from 'redux-saga/effects';

import { loadDataUASuccess } from './../actions';

// prettier-ignore
function *getUA(axios){
    const dados = yield axios.get('http://httpbin.org/user-agent')
    console.log(dados)
    yield put(loadDataUASuccess(dados.data['user-agent']))
}

export default getUA;
