import { Http } from '@nativescript/core';
import { User } from '../models/user.model';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export class UserService {
    async getUsers(): Promise<User[]> {
        // const response = await Http.request({
        //     url: `${BASE_URL}/users`,
        //     method: 'GET',
        // });

        // if (response.statusCode !== 200) {
        //     throw new Error(`Failed to fetch users. Status: ${response.statusCode}`);
        // }

        // return response.content.toJSON() as User[];
        return [] as User[]; // placeholder — replace with real implementation
    }
}
