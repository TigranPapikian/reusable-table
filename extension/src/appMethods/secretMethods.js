import CryptoJS from 'crypto-js';
import { APP_SECRET } from '../constant/varName';

export class StatelessSecretMethods {
    getEncryptedSecret() {
        const decryptedMessage = CryptoJS.AES.decrypt(localStorage.getItem(APP_SECRET), process.env.REACT_APP_SECRET).toString(CryptoJS.enc.Utf8);
        return decryptedMessage
    }
}

export class SecretMethods extends StatelessSecretMethods {
    constructor(secret) {
        super()
        this.secret = secret
    }
    encryptAndSaveSecret() {
        const encryptedMessage = CryptoJS.AES.encrypt(this.secret, process.env.REACT_APP_SECRET).toString();
        localStorage.setItem(APP_SECRET, encryptedMessage)
    }
    
}