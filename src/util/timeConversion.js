export function timeConversion(millisec) {

    var seconds = (millisec / 1000).toFixed(1);

    var minutes = (millisec / (1000 * 60)).toFixed(1);

    var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

    var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

    if (seconds < 60) {
        return seconds + " Sec ago";
    } else if (minutes < 60) {
        return minutes + " Min ago";
    } else if (hours < 24) {
        return hours + " Hrs ago";
    } else {
        return days + " Days ago"
    }
}