httpReq.onreadystatechange = function () {
    if (httpReq.readyState == 4)
        if (httpReq.status = 200)
            alert("The response is : " + httpReq.responseText);
}
httpReq.onreadystatechange = function () {
    if (httpReq.readyState == 4)
        if (httpReq.status = 200) {
            console.log("bf");
            alert("The response is : " + httpReq.responseText);
            console.log("af");
        }

}
Promise.all(
    urls.map(async (url) => {
        const productId = await myFunction(url);
        console.log(productId);
    })
);