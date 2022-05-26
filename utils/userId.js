import { USERID } from './contants';

export function setUserID(userid) {
    localStorage.setItem(USERID, userid);
}

export function getUserID() {
    return localStorage.getItem(USERID);
}

export function removeUserID() {
    localStorage.removeItem(USERID);
}
