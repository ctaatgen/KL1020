
function initBriefing() {
    $(".documents .document").click(openDocument);
}


function openDocument() {
    // simulating link.click doesn't work
    // doing it the dirty way
    window.open($(this).find(".link").attr('href'),'_blank');
    return false;
}