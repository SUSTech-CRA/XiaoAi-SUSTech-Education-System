async function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {
    // 以下可编辑
    const url = "https://tis.sustech.edu.cn/xszykb/queryxszykbzong"

    let xn = "xn="
    let xq = "xq="
    let date = new Date()
    let month = date.getMonth()
    let year = date.getFullYear() - (month <= 8 ? 1 : 0)

    xn = xn + year + "-" + (year + 1)
    if (0 <= month && month <= 5)
        xq = xq + "2"
    else if (6 <= month && month <= 7)
        xq = xq + "3"
    else
        xq = xq + "1"

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: xn + "&" + xq
        }).then(res => res.text())
        return response
    } catch (error) {
        console.error(error)
        await AIScheduleAlert(error.message)
        return "do not continue"
    }
}
