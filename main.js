var sendArray = {
    people: [
        {name: "", email: ""},

    ]
}
let sendObj = {}
let sendArr = []
let userInput = 10

const extractInfo = function(data) {
    let peopleArray = data.results[0]; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!send this, one by one
    /*        var newHTML = template(peopleArray); //this sends the one-by-one
        
        $('.peopleDiv').append(newHTML); */
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
    console.log(peopleArray) 
    personName = peopleArray.name.first + " " + peopleArray.name.last
    personEmail = peopleArray.email
    personImage = peopleArray.picture.large

    console.log(peopleArray)

    sendArray.name = personName
    sendArray.email = personEmail
    img = peopleArray.picture.large  //CONTINUE HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    let obj = {"name":personName,
    "email": personEmail,
    "image": personImage
    }
    sendArr.push(obj)
    sendObj["people"] = sendArr
    
    // sendArray.append(personTemp)
    console.log("SEND: ", sendObj)
    

    var source = $('#people-template').html();
    var template = Handlebars.compile(source);
    if (sendObj["people"].length == userInput) {
    
        var newHTML = template(sendObj); //this sends the one-by-one
        
        $('.peopleDiv').append(newHTML);

        $("#askUser").css("display", "none")
    }


}

function generateRandomUser() {
    for(let i=0; i<userInput; i++) {
        $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: extractInfo
    });
}
}




$("body").on("click", ".btn", function() {
    userInput = $("#numCards").val()
    alert(`You have entered the number ${userInput}. Please wait while we generate`)
    generateRandomUser()

})


// var peopleData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer"},
//         {name: "The weird dude", description: "Quick with a smile"},
//         {name: "Taylor", description: "Just Taylor"}
//     ]
// }



