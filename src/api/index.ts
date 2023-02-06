import axios, { AxiosError } from "axios"
import { ICatViewModel } from "./CatTypes"

export class CatsApi {
    static async getAllBreeds(): Promise<ICatViewModel[]> {
        try {
            const response = await axios.get("https://catwiki-server.onrender.com/breeds")
            return response.data
        } catch (error) {
            throw error as AxiosError
        }
    }

    static async getBreed(code: string): Promise<ICatViewModel> {
        try {
            const response = await axios.get(`https://catwiki-server.onrender.com/breeds/${code}`)
            return response.data
        } catch (error) {
            throw error as AxiosError
        }
    }
}
