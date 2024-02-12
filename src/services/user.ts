import api from './api';

export async function register(name:string, email:string, password:string) {
    try {
        const response = await api.post('/api/users', {
            "name": name,
            "email": email,
            "password": password
        });

        if(response.data) {
            alert('Conta criada com sucesso!\nVá para a tela de login')
        } else {
            alert('Erro ao criar conta...')
        }
    
    } catch(e) {
        alert("Erro ao criar conta")
    }
}