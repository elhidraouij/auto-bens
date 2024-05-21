import { apiUrl } from "@/constants";

export const getMessages = async (page: number, elementParPage: number) => {
    const response = await fetch(`http://${apiUrl}/messages?page=${page}&elementParPage=${elementParPage}`, {
        method: 'GET'
    })

    if (!response.ok) {
        if (response.status === 400) {
            throw new Error('Bad Request')
        } else if (response.status === 500) {
            throw new Error('Internal Server Error')
        } else {
            throw new Error('Une erreur a lieu')
        }
    }

    return await response.json()
}

export const postMessage = async (form: FormData) => {
    const response = await fetch(`http://${apiUrl}/messages`, {
        method: 'POST',
        body: form
    })

    if (!response.ok) {
        if (response.status === 400) {
            throw new Error('Veuillez bien renseigner les champs tous les champs.')
        } else {
            throw new Error('Une erreur a eu lieue lors de l\'envoi de votre message.')
        }
    }
}

export const readMessage = async (id: number) => {
    const form = new FormData()
    form.append('id', id.toString())
    
    const response = await fetch(`http://${apiUrl}/messages`, {
        method: 'PUT',
        body: form
    })

    if (!response.ok) {
        throw new Error('Une erreur a eu lieue lors de l\'envoi de votre message.')
    }
}