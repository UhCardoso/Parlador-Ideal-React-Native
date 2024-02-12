import api from './api';

export async function savePost(userId:string, description: string) {
    try {
        const response = await api.post(`/api/posts/${userId}/store`, {
            "description": description
        });
        
        if(response.data) {
            alert('Postagem enviada com sucesso!\n\nAtualize a página!')
            return response.data
        } else {
            alert('Erro ao enviar postagem...')
        }
        return response;
    } catch(e) {
        alert("Erro ao enviar postagem")
    }
}

export async function getPosts() {
    try {
        const response = await api.get('/api/posts');
        return response.data.data.reverse();

    } catch(e) {
        alert("Erro ao listar postagens")

        return [{
            "created":null,
            "description": "Nenhuma postagem no momento",
            "identify":null,
            "user":{
                "created_at":null,
                "email":null,
                "email_verified_at":null,
                "id":null,
                "name":"Desculpe..",
                "updated_at":null
            }
        }]
    }
}

export async function editPost(userId:string, postId:string, description: string) {
    try {
        const response = await api.patch(`/api/posts/${userId}/update/${postId}`, {
            description
        });
        
        if(response.status) {
            alert('Postagem editada com sucesso!\n\nAtualize a página!')
            return {edited: true}
        }
    } catch(e) {
        alert("Erro ao deletar postagem")
        return {edited: "false"}
    }
}

export async function deletePost(userId:string, postId:string) {
    try {
        const response = await api.delete(`/api/posts/${userId}/delete/${postId}`);
        if(response.status) {
            alert("Postagem deletada com sucesso!")
            return {deleted: true}
        }
    } catch(e) {
        alert("Erro ao deletar postagem")
        return {deleted: "false"}
    }
}