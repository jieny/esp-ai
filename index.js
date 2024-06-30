const espAi = require("esp-ai");

espAi({
    api_key: {
        // 讯飞：https://console.xfyun.cn/services/iat  。打开网址后，右上角三个字段复制进来即可。
        xun_fei: {
            appid: "47a65ab9",
            apiSecret: "ODQwOGNlNDA3YjQxYWRjZGM3ZDkxMTY0",
            apiKey: "c45214e4e7fd16113fc40782ecd30605",
            // LLM 版本
            llm: "v3.5",
        },
    },
});

// 执行 → node ./index.js

// 生产环境中请使用 pm2 来运行服务以保证服务的可靠和性能。
// 执行 → pm2 start ./index.js -i max
