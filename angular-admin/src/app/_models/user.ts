import {Model} from "@app/_models/_Model";

export class User extends Model{
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}
