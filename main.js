//დავალება 7.1

let year = {
    month1 : "იანვარი",
    month2 : "თებერვალი",
    month3 : "მარტი",
    month4 : "აპრილი",
    month5 : "მაისი",
    month6 : "ივნისი",
    month7 : "ივლისი",
    month8 : "აგვისტო",
    month9 : "სექტემბერი",
    month10 : "ოქტომბერი",
    month11 : "ნოემბერი",
    month12 : "დეკემბერი",
}
console.log(Object.values(year));

//დავალება 7.2

const person = {
    name: "ნატო",
    surname:"შონია",
    gender:"მდედრობითი"
}
let together = Object.values(person)
let result = together.slice(0,-1).join(" ") + "(" +  together[together.length -1] + ")";                             
console.log(result);

//დავალება 7.3

//ვერსია ერთი
const date = {
    day:"19",
    month:"january",
    year:"2026"
}
console.log(Object.values(date))