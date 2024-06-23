import { serverconfig, getMemberHighestRole, checkUserChannelPermission } from "../index.mjs";
import { getMemberLastOnlineTime } from "./getMemberLastOnlineTime.mjs";

export function getMemberList(member, channel) {


    var code = "";

    var members = serverconfig.servermembers;
    var roles = serverconfig.serverroles;

    var sortedRoles = [];
    var offlineMember = [];

    Object.keys(roles).reverse().forEach(function (role) {
        sortedRoles[roles[role].info.sortId] = roles[role];
    });

    // Foreach role
    sortedRoles = sortedRoles.reverse();
    sortedRoles.forEach(role => {

        var noMembersInRole = true;
        // Role ID:
        // role
        // Role Object
        // roles[Role]
        // If role display is on
        if (role.info.displaySeperate == 1) {

            // Foreach Role Member
            Object.keys(members).forEach(function (member) {
                // Member ID:
                // member

                // Do not show banned users
                if (serverconfig.servermembers[member].isBanned == 1) {
                    return;
                }

                // Member Object
                // members[member]
                //console.log(member);
                //console.log(members[member]);
                // check here for highest role
                var highestMemberRole = getMemberHighestRole(member);


                if ((role.members.includes(member) && role.info.displaySeperate == 1) ||
                    role.info.id == 1) {

                    if (role.info.id == 1 && getMemberLastOnlineTime(member) > 5) {
                        if (!offlineMember.includes(member)) {
                            offlineMember.push(member);
                        }
                    }

                    /*
                    // Only display role in member list if at least one user is present in the role
                    if(noMembersInRole == true){
                        code += `<div class="infolist-role" title="${role.info.name}">
                                    ${role.info.name}
                                    <hr style="margin-bottom: 16px;">
                                </div>`;

                        noMembersInRole = false;
                    }



                    code += `<div class="memberlist-container" id="${members[member].id}">
                                <img class="memberlist-img" id="${members[member].id}" src="${members[member].icon}" onerror="this.src = '/img/default_pfp.png';">
                                <div class="memberlist-member-info name" onclick="getMemberProfile('${members[member].id}');" id="${members[member].id}" style="color: ${role.info.color};">
                                    ${members[member].name}
                                </div>
                                <div class="memberlist-member-info status" id="${members[member].id}">
                                    ${members[member].status}
                                </div>
                            </div>`;

                     */
                    if (checkUserChannelPermission(channel, member, "viewChannel") == true) {

                        if (highestMemberRole.info.displaySeperate == 1 && role.info.id != highestMemberRole.info.id && role.info.id != 1) {
                            return;
                        }

                        var extraClassOffline = "";
                        if (role.info.id != 1) { // != Offline
                            if (getMemberLastOnlineTime(member) > 5) {
                                return;
                            }
                        }
                        else {
                            if (getMemberLastOnlineTime(member) < 5) {
                                return;
                            }
                            else {
                                extraClassOffline = "offline_pfp";
                            }
                        }

                        // this can hide offline members - potential setting
                        //if(offlineMember.includes(member)){
                        //    return;
                        //}
                        // hide online members from offline section
                        if (offlineMember.includes(member)) {
                            offlineMember.pop(member);
                        }

                        if (noMembersInRole == true) {
                            code += `<div class="infolist-role" title="${role.info.name}" style="color: ${role.info.color};">
                                    ${role.info.name}
                                    <hr style="margin-bottom: 16px;border: 1px solid ${role.info.color};">
                                </div>`;

                            noMembersInRole = false;
                        }

                        // If user is muted make it somehow visually known
                        var nameStyle = `${members[member].name}`;
                        var statusStyle = `${members[member].status}`;
                        if (members[member].isMuted) {
                            nameStyle = `<s style="color: indianred;"><span style="font-style: italic;color:indianred">${members[member].name}</span></s>`;
                            statusStyle = `<s style="color: indianred;"><span style="font-style: italic;color:indianred">${members[member].status}</span></s>`;
                            extraClassOffline = "offline_pfp";
                        }


                        code += `<div class="memberlist-container" id="${members[member].id}">
                                <img class="memberlist-img ${extraClassOffline}" id="${members[member].id}" src="${members[member].icon}" onerror="this.src = '/img/default_pfp.png'">
                                <div class="memberlist-member-info name" 
                                onclick="getMemberProfile('${members[member].id}');" id="${members[member].id}" 
                                style="color: ${role.info.color};">
                                    ${nameStyle}
                                </div>
                                <div class="memberlist-member-info status" id="${members[member].id}" style="color: ${role.info.color};">
                                    ${statusStyle}
                                </div>
                            </div>`;

                    }

                }

            });
        }
    });

    return code;
}
