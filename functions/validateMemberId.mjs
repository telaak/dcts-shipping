import { checkRateLimit } from "../index.mjs";

export function validateMemberId(id, socket, bypass = false) {
    if (bypass == false) {
        checkRateLimit(socket);
    }

    if (id.length == 12 && isNaN(id) == false) {
        return true;
    } else {
        return false;
    }
}
