import GetUsers from "./scenarios/Get-Users.js";
import {group , sleep} from 'k6';

export default () => {
    group('Endpoint Get User', () => {
        GetUsers();
    });

    sleep(1);
}