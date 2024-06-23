import { serverconfig } from "../index.mjs";

export function convertMention(text) {

    var pingedUsers;
    var userId;
    try {
        pingedUsers = text.message.replaceAll(/[\\<>@#&!]/g, "").split(" ");

        if (pingedUsers == null) {
            return text.message;
        }

        for (let i = 0; i < pingedUsers.length; i++) {
            try {
                userId = pingedUsers[i];
                userId = userId.replace(/\D/g, '');
                text.message = text.message.replaceAll(`&lt;@${userId}&gt;`, `<label class="mention" id="mention-${serverconfig.servermembers[userId].id}">@${serverconfig.servermembers[userId].name}</label>`);
            }
            catch (lolz) {
                //consolas(colors.red(lolz), "Debug");
            }
        }

        return text.message;
    }
    catch (exe) {
        console.log(exe);
    }
}
