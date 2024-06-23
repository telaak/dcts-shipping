import { serverconfig } from "../index.mjs";


export function getMemberLastOnlineTime(memberID) {
    var lastOnline = serverconfig.servermembers[memberID].lastOnline / 1000;

    var today = new Date().getTime() / 1000;
    var diff = today - lastOnline;
    var minutesPassed = Math.round(diff / 60);

    return minutesPassed;
}
