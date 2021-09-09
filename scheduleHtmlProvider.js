function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {
    //除函数名外都可编辑
    //以下为示例，您可以完全重写或在此基础上更改

    let request = new XMLHttpRequest();
    request.open("POST", "/xszykb/queryxszykbzong", false);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

    let xn = "xn=";
    let xq = "xq=";
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    xn = xn + year.toString() + "-" + (year + 1).toString();
    if (0 <= month && month <= 5)
        xq = xq + "2";
    else if (6 <= month && month <= 7)
        xq = xq + "3";
    else
        xq = xq + "1";

    let result = "";
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            result = request.responseText;
        }
    }

    try {
        request.send(xn + "&" + xq);
    } catch (error) {
        console.error(error);
    }

    return result;
}
