Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

var weekNumber = (new Date()).getWeek();
console.log (weekNumber,"Неделя");
if (weekNumber % 2) 
document.write('Upper week'); 
else document.write('Lower week'); 
