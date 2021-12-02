import PageRenderer from "./PageRenderer";

const pr = new PageRenderer();
// @ts-ignore
onmessage = function(e) {
    alert("worker")
    pr.renderResultsPage();
}