import axios from 'axios'

const api = axios.create({
    baseURL: 'https://w25w11-mongodb-backend-s26p.onrender.com',
})

export const getSongList = async () => {
    const res = await api.get(``)
    return res.data
}

export const getSongDetail = async (id) => {
    const res = await api.get(`/${id}`)
    return res.data
}