//const fetch = require('node-fetch'); fetch comes with node 16+
import { versionCode } from "../index.mjs";

export async function checkVersionUpdate() {
    return new Promise((resolve, reject) => {
        var badgeUrl = 'https://raw.githubusercontent.com/hackthedev/dcts-shipping/main/version';


        (async function () {
            const res = await fetch(badgeUrl);
            //console.log(res);
            if (res.status == 404) {
                resolve(null);
                return null;
            }
            else if (res.status == 200) {
                const onlineVersionCode = await res.text();
                //console.log(html)
                if (onlineVersionCode > versionCode) {
                    resolve(onlineVersionCode.replaceAll("\n\r", "").replaceAll("\n", ""));
                    return onlineVersionCode.replaceAll("\n\r", "").replaceAll("\n", "");
                }
                else {
                    resolve(null);
                    return null;
                }

                resolve(html);
                return html;
            }
            else {
                resolve(null);
                return null;
            }
        })();


    });

    return prom;
}
