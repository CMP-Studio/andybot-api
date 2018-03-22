import * as crypto from "crypto";

export function isNull(v: any) { return  (v === undefined || v === null); }

export function isNonNull(v: any) { return !isNull(v); }

export function randomString(n?: number) {
    return crypto.randomBytes((n || 4)).toString("hex");
}

export function saltHashPassword(password, providedSalt?: string) {
    const salt = providedSalt || randomString();
    const hash = crypto.createHmac("sha512", salt).update(password);
    return {
        salt,
        hash: hash.digest("hex")
    };
}
