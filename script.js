let arr = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];
let updatedList = arr.map((element) => {
	// ["a", "some", "one"]
	let words = element.split(" ") ;
	let updatedString = words.reduce((prev, current, index) => {
		if(current != "The" && current != "an" && current != "a"){
			return prev + " " + current ;
		}
		return prev ;
	}, "")

	return updatedString ;
}) ;
let mp = {} ; // {"some one" : "a some one"}
updatedList.forEach( (element, index) => {
	mp[element] = arr[index] ;
});
// ["some one" , "mno abc" , "abc kh"]

updatedList.sort(); 

let finalAns = updatedList.map((element) => {
    return mp[element] ;
})

const ul = document.getElementById("band")

finalAns.forEach((item) => {
	const li = document.createElement("li");
	li.innerText = item ;
	ul.append(li);
})