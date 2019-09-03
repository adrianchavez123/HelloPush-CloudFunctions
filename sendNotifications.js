var request = require('request');
var openwhisk = require('openwhisk');
async function main(params) {

    const name = 'push-notifications/send-message'

    const paramsJson = {

        // Config
        apikey: "your api Key",
        appId: "your appguid",
        apiHost: "imfpush.ng.bluemix.net",

        // message
        messageText: 'Notification message',
        messageUrl: "https://test.cloud",

        // Target
        targetDeviceIds: ["DeviceId1", "DeviceId2"],
        targetPlatforms: ["A", "G"],
        targetTagNames: ["tag1", "tag2"],
        targetUserIds: ["userId1", "UserID2"],

        // APNS

        apnsBadge: 2,
        apnsCategory: "category 1",
        apnsActionKeyTitle: "VIEW",
        apnsSound: "Newtune.wav",
        apnsPayload: "{\"key1\":\"value1\"}",
        apnsType: "DEFAULT",
        apnsTitleLocKey: "TITLE1",
        apnsLocKey: "LOCKEY1",
        apnsLaunchImage: "launchImage1.png",
        apnsTitleLocArgs: ["arg1", "arg2"],
        apnsLocArgs: ["arg3", "arg4"],
        apnstitle: "welcome to IBM Cloud Push service",
        apnsSubtitle: "Push Notifications",
        apnsAttachmentUrl: "https://IBMCloud.net/image.png",

        // GCM

        gcmCollapseKey: "collapseKey1",
        gcmDelayWhileIdle: false,
        gcmPayload: "{\"key1\":\"value1\"}",
        gcmPriority: "DEFAULT",
        gcmSound: "sound.wav",
        gcmTimeToLive: 2,
        gcmSync: false,
        gcmVisibility: "Public",
        gcmCategory: "category1",
        gcmIcon: "icon.png",
        gcmStyleType: "inbox_notification",
        gcmStyleTitle: "inbox notification",
        gcmStyleUrl: "https://IBMCloud.net/image.png",
        gcmStyleText: "some big text",
        gcmStyleLines: ["line 1", "line 2"],
        gcmLightsLedArgb: "green",
        gcmLightsLedOnMs: 3,
        gcmLightsLedOffMs: 2,

        // Firefox

        fireFoxTitle: "IBM Cloud Push Notifications",
        fireFoxIconUrl: "https://IBM Cloud.net/icon.png",
        fireFoxTimeToLive: 3,
        fireFoxPayload: "{\"key1\":\"value1\"}",

        // Chrome

        chromeTitle: "IBM Cloud Push Notifications",
        chromeIconUrl: "https://IBMCloud.net/icon.png",
        chromeTimeToLive: 3,
        chromePayload: "{\"key1\":\"value1\"}",


        // Safari

        safariTitle: "IBM Cloud Push Notifications",
        safariUrlArgs: ["https://IBMCloud.net"],
        safariAction: "View",

        // Chrome App / Ext

        chromeAppExtTitle: "IBM Cloud Push Notifications",
        chromeAppExtCollapseKey: "collapseKey1",
        chromeAppExtDelayWhileIdle: false,
        chromeAppExtIconUrl: "https://IBMCloud.net/icon.png",
        chromeAppExtTimeToLive: 4,
        chromeAppExtPayload: "{\"key1\":\"value1\"}"
    };

    return whisk.actions.invoke({
        name,
        blocking,
        result,
        params: paramsJson
    });
}