function scheduleHtmlParser(html) {
    //除函数名外都可编辑
    //传入的参数为上一步函数获取到的html
    //可使用正则匹配
    //可使用解析dom匹配，工具内置了$，跟jquery使用方法一样，直接用就可以了，参考：https://juejin.im/post/5ea131f76fb9a03c8122d6b9
    //以下为示例，您可以完全重写或在此基础上更改
    let result = {};
    result["courseInfos"] = [];
    
    let json = JSON.parse(html);
    json.forEach(function(e) {
        let classInfo = e["SKSJ"].split("\n");
        let classname = classInfo[2].replace("[", "").replace("]", "");
        let teacher = classInfo[1].replace("[", "").replace("]", "");

        let extra = classInfo[3].replace(/\[/g, "").split("]");
        let position = extra[1];

        let dayInfo = e["KEY"].replace("xq", "").split("_jc");
        let day = dayInfo[0];
        let section = parseInt(dayInfo[1]);

        let weekInfo = extra[0].split(",");
        let weekSingleReg = /^([0-9]+)周$/;
        let weekMultiReg = /^([0-9]+)-([0-9]+)([^0-9]*)$/;
        let weeks = [];
        weekInfo.forEach(function(e) {
            if (weekSingleReg.test(e)) {
                weeks.push(parseInt(e.match(weekSingleReg)[1]));
            } else if(weekMultiReg.test(e)) {
                let re = e.match(weekMultiReg);
                let start = parseInt(re[1]);
                let end = parseInt(re[2]);
                let str = re[3];
    
                for(let i=start; i<=end; i++) {
                    if (((str=="单周" || str=="单") && i%2==1) 
                        || ((str=="双周" || str=="双") && i%2==0) 
                        || str=="周") {
                        weeks.push(i);
                    }
                }
            }
        });

        result["courseInfos"].push({
            "name": classname,
            "position": position,
            "teacher": teacher,
            "weeks": weeks,
            "day": day,
            "sections": [{
                "section": section,
            }]
        });
    });

    result["sectionTimes"] = [
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

    return result;
}
