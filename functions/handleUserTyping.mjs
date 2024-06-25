import { escapeHtml } from "./escapeHtml.mjs";
import { typingMembers, typingMembersTimeout } from "../index.mjs";
import { validateMemberId } from "./validateMemberId.mjs";

export function handleUserTyping(socket, io, serverconfig, member) {
  if (
    validateMemberId(member.id, socket, true) == true &&
    serverconfig.servermembers[member.id].token == member.token
  ) {
    //consolas("Typing room: " + member.room);
    //consolas("Typing member id: " + member.id);

    // if user is muted dont do anything
    if (serverconfig.mutelist.hasOwnProperty(member.id)) {
      return;
    }

    var username = serverconfig.servermembers[member.id].name;

    if (typingMembers.includes(username) == false) {
      typingMembers.push(escapeHtml(username));
    }

    clearTimeout(typingMembersTimeout[username]);
    typingMembersTimeout[username] = setTimeout(() => {
      if (typingMembers.includes(username) == true) {
        typingMembers.pop(escapeHtml(username));
      }

      io.in(member.room).emit("memberTyping", typingMembers);
    }, 4 * 1000);

    //console.log(typingMembersTimeout[username]);

    io.in(member.room).emit("memberTyping", typingMembers);
  }
}
