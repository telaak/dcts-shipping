import { serverconfig } from "../index.mjs";

export function resolveCategoryByChannelId(id) {

    var found = null;
    // Foreach Group
    Object.keys(serverconfig.groups).reverse().forEach(function (group) {
        //console.log(group);

        // For each Category
        Object.keys(serverconfig.groups[group].channels.categories).reverse().forEach(function (category) {
            //console.log(category);


            // For each Channel
            Object.keys(serverconfig.groups[group].channels.categories[category].channel).reverse().forEach(function (channelId) {


                if (channelId == id) {
                    found = category;
                }
            });
        });
    });

    return found;
}
