
function createGreeting (mentorName) {
 
    return ("Hello " + mentorName) ;
}


    function upper(mentorName) {
        let shoutyGreeting = createGreeting (mentorName);

        return shoutyGreeting.toUpperCase();
   
    }

    
        



var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


console.log (upper(mentor1));
console.log(upper(mentor2));
console.log(upper(mentor3));
console.log(upper(mentor4));
console.log(upper(mentor5));