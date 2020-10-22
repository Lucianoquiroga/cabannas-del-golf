$("#book_date_end").on("changeDate", function(e) {
    compareDate();
    
});
$("#book_date").on("changeDate", function(e) {
    compareDate();
});
    
function compareDate() {
    var dateStart = getDateFormat(document.getElementById('book_date').value);
    var dateEnd = getDateFormat(document.getElementById('book_date_end').value);
    var alert = document.getElementById('alert-error');
    if (dateEnd.getTime() < dateStart.getTime()) {
        alert.removeAttribute('hidden');
    } else {
        alert.setAttribute('hidden', true);
    }
}