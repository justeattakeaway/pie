const showMore = () => {
    var text;
    var status = "less";
    function toggleText()
{

    if (status == "less") {
        text = ""
        status = "more";
    } else if (status == "more") {
        text = "Here is some text that I want added to the HTML file";
        status = "less"
    }
}
    return `<button onclick="toggleText()" id="textButton">
                Show More
            </button>
            ${text}`
}

module.exports = function () {
    return `<div class="c-link-container">${showMore()}</div>`
};
