import api from './api';

export async function signIn(email:string, password:string) {
    console.log(email, password)
    try {
        const response = await api.post('/api/login', {
            "email": email,
            "password": password,
            "device_name": "android_mobile"
        })
        return response.data;

    } catch(e) {
        console.log(e)
        alert("Erro ao tentar logar na conta");
    }
}