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

//ვერსია ორი
const now = new Date();

const date1 = {
    day: now.getDate(),
    month:now.getMonth() + 1,
    year: now.getFullYear()
};
console.log(`${date1.day} / ${date1.month} / ${date1.year}` )

//დავალება 7.4

let obj = {
    '11key': 'მნიშვნელობა1', 
    'key-8': 'მნიშვნელობა2',
    ' key4': 'მნიშვნელობა3'}; 

console.log(Object.values(obj))

//დავალება 7.5

let obj1 = { 
    '9name': 10, 
     key7: 20, 
    'a-b': 30, 
    'city 10': 40, 
     city10: 50 
};
console.log(Object.values(obj1))

//დავალება 7.6

let products = { 
    pr1: 'ბანანი', 
    pr2: 'მარწყვი', 
    pr3: 'მსხალი', 
    pr4: 'მარწყვი', 
    pr5: 'ატამი', 
    pr6: 'საზამთრო', 
    pr7: 'მარწყვი' 
} 

products.pr2 = "ალუბალი";
products.pr4 = "ალუბალი";
products.pr7 = "ალუბალი";
console.log(Object.values(products))