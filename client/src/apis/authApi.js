import api from './serverApi'

export const SignIn = (data) => {
    return api.post('/signin', data)
}