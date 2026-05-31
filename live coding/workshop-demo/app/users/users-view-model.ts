import { Observable } from '@nativescript/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

export class UsersViewModel extends Observable {
    // private _users: User[] = [];
    // private _isLoading: boolean = false;
    // private _errorMessage: string = '';

    // private userService = new UserService();

    constructor() {
        super();
        // this.loadUsers();
    }

    // get users(): User[] {
    //     return this._users;
    // }

    // set users(value: User[]) {
    //     this._users = value;
    //     this.notifyPropertyChange('users', value);
    // }

    // get isLoading(): boolean {
    //     return this._isLoading;
    // }

    // set isLoading(value: boolean) {
    //     this._isLoading = value;
    //     this.notifyPropertyChange('isLoading', value);
    // }

    // get errorMessage(): string {
    //     return this._errorMessage;
    // }

    // set errorMessage(value: string) {
    //     this._errorMessage = value;
    //     this.notifyPropertyChange('errorMessage', value);
    //     // hasError is derived from errorMessage, notify it too
    //     this.notifyPropertyChange('hasError', value !== '');
    // }

    // get hasError(): boolean {
    //     return this._errorMessage !== '';
    // }

    async loadUsers(): Promise<void> {
        // this.isLoading = true;
        // this.errorMessage = '';

        // try {
        //     const users = await this.userService.getUsers();
        //     this.users = users;
        // } catch (error: any) {
        //     this.errorMessage = error.message || 'Failed to load users.';
        // } finally {
        //     this.isLoading = false;
        // }
    }
}
