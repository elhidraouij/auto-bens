import { apiUrl } from "@/constants"

export const getCars = async (
    page: number,
    elementPerPage: number,
    hidden: number,
    solded: number,
    brand: string,
    model: string
) => {
    const body = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    brand = brand ? brand : ''
    model = model ? model : ''

    const response = await fetch(`http://${apiUrl}/cars?page=${page}&elementPerPage=${elementPerPage}&hidden=${hidden}&solded=${solded}&brand=${brand}&model=${model}`)

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('Aucune voiture trouvée')
        } else if (response.status === 400) {
            throw new Error('Veuillez entrer des paramètres corrects')
        } else {
            throw new Error('Une erreur a lieu')
        }
    }

    return await response.json()
}

export const getModels = async () => {
    const response = await fetch(`http://${apiUrl}/cars/models`)

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('Aucune voiture trouvée')
        } else {
            throw new Error('Une erreur a lieu')
        }
    }

    return await response.json()
}

export const addCar = async (form: FormData) => {
    const response = await fetch(`http://${apiUrl}/cars`, {
        method: 'POST',
        body: form
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
}

export const updateCar = async (form: FormData) => {
    const response = await fetch(`http://${apiUrl}/cars`, {
        method: 'PUT',
        body: form
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
}

export const deleteCar = async (form: FormData) => {
    const response = await fetch(`http://${apiUrl}/cars`, {
        method: 'DELETE',
        body: form
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
}