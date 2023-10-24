import { Inject } from "@angular/core";

import { LocalstorageService } from "src/app/services/localstorage.service";

@Inject({
    providedIn: 'root'
})
export class UserToken {
    constructor(accessToken: string, expiresAt: string,) {
        this.accessToken = accessToken;
        this.expiresAt = expiresAt
    }

    accessToken: string;
    expiresAt: string;
}