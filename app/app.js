import * as model from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    let pageContent = pageName + "Page";

    //if(pageName == ""){
    //    pageContent = "homeContent"
    //}
    model.pageViewName(pageContent)
}

function initListeners() {
    $(window).on("hashchange", route);
}

$(document).ready(function () {
    model.showContent();
    initListeners();
});