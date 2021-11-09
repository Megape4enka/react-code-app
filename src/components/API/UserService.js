import axios from 'axios'

export default class UserService {

    static async getAll() {
        const response = await axios.get('shttps://stoplight.io/mocks/kode-education/trainee-test/25143926/users')
        return response.data.items
    }
}