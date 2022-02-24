/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
async function scheduleTimer({
    providerRes,
    parserRes
} = {}) {
    return {
        totalWeek: Math.max.apply(Math, parserRes.map(e => Math.max.apply(Math, e["weeks"]))),
        showWeekend: true,
        forenoon: 2,
        afternoon: 2,
        night: 2,
        sections: [
            {
                "section": 1,
                "startTime": "08:00",
                "endTime": "09:50"
            },
            {
                "section": 2,
                "startTime": "10:20",
                "endTime": "12:10"
            },
            {
                "section": 3,
                "startTime": "14:00",
                "endTime": "15:50"
            },
            {
                "section": 4,
                "startTime": "16:20",
                "endTime": "18:10"
            },
            {
                "section": 5,
                "startTime": "19:00",
                "endTime": "20:50"
            },
            {
                "section": 6,
                "startTime": "21:00",
                "endTime": "21:50"
            }
        ]
    }
}
