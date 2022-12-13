import axios from "axios";
const BASE_URL = 'https://6388b351d94a7e5040a45fdf.mockapi.io'

export function getVacations() {
    try {
        return axios.get(`${BASE_URL}/api/vacations`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export function getVacationById(id) {
    try {
        return axios.get(`${BASE_URL}/api/vacations/${id}`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export function addNewVacation(newVacation) {
    try {
        return axios.post(`${BASE_URL}/api/vacations`, newVacation).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}

export function deleteVacationById(id) {
    try {
        return axios.delete(`${BASE_URL}/api/vacations/${id}`).then(res => res.data)
    } catch (error) {
        console.log(error);
    }
}