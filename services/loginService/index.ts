import { apiUrl } from "@/constants"

export async function logIn(login: string, password:string){
    const body = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login, password})
    }

    const response = await fetch(`${apiUrl}/auth/login`, body)
    
    if (!response.ok) {
        if (response.status === 400) {
            throw new Error('Veuillez entrer des identifiants valides')
        } else if (response.status === 401) {
            throw new Error('Identifiants incorrects')
        } else {
            throw new Error('Une erreur a lieu lors du processus de connexion')
        }
    }

    return await response.json()
}

export async function logOut(){
    const body = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(`${apiUrl}/auth/logout`, body)
    
    if (!response.ok) {
        throw new Error('Une erreur a lieu lors du processus de deconnexion')
    }
}