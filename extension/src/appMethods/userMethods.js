import CryptoJS from 'crypto-js';
import { APP_SECRET, APP_USER_PASS } from '../constant/varName';

export class StatelessUserMethods {
    processLogin(password) {
        const decryptedMessage = CryptoJS.AES.decrypt(localStorage.getItem(APP_USER_PASS), localStorage.getItem(APP_SECRET)).toString(CryptoJS.enc.Utf8);
        return decryptedMessage === password
    }
    resetApp() {
        localStorage.removeItem(APP_USER_PASS)
        localStorage.removeItem(APP_SECRET)
    }
    getAndDecryptPassword() {
        if (localStorage.getItem(APP_USER_PASS)) {
            const decryptedMessage = CryptoJS.AES.decrypt(localStorage.getItem(APP_USER_PASS), localStorage.getItem(APP_SECRET)).toString(CryptoJS.enc.Utf8);
            return decryptedMessage
        }
    }
}

export class UserMethods extends StatelessUserMethods {
    constructor(password) {
        super()
        this.password = password;
    }
    encryptPasswordAndSave() {
        const encryptedMessage = CryptoJS.AES.encrypt(this.password, localStorage.getItem(APP_SECRET)).toString();
        localStorage.setItem(APP_USER_PASS, encryptedMessage)
    }
}



