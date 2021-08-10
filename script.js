// link to the api 
url = "https://dog.ceo/api/breeds/image/random"

// fetch attributes 
let body = document.querySelector("body");
let borderButton = document.querySelector("#border");
let imageContainer = document.querySelector("#imgContainer");
let colorInput = document.querySelector("#color")
let borderSizeControl = document.querySelector("#borderSize")
let radiusSizeControl = document.querySelector("#radiusSize");
let radiusLabel = document.querySelector("#radiusRound");
let borderLabel = document.querySelector("#borderThick");

//border boolean
let borderPresent = false;

// here we fetch the api response and grab a json response
// fetch(url)
//     .then(function(response) {
    //         console.log("A request has been sent");
    //         return response.json();
    //     })
    //     .then(function(json) {
        //         let dogUrl = json.message;
        //         console.log(dogUrl);
        //         let newDiv = document.createElement("div");
        //         let newImg = document.createElement("img");
        
        //         newImg.src = dogUrl;
        //         newDiv.appendChild(newImg);
        //         body.appendChild(newDiv);
        
        //         // when button for border is clicked
        //         borderButton.onclick = function(event) {
            //             // reference to our image
            //             let image = document.querySelector("img");
            //             if (borderPresent) {
                //                 image.style.border = "none";
                //                 borderPresent = !borderPresent;
                //                 borderButton.textContent = "Border";
                //             }
                //             else {
                    //                 // border is not present
                    //                 image.style.border = "black solid 2px";
                    //                 borderPresent = !borderPresent;
                    //                 borderButton.textContent = "No Border";
                    //             }
                    //         }
                    //     })
                    
                    // hardcode it here for testing purposes
dogUrl = "https://images.dog.ceo/breeds/affenpinscher/n02110627_7680.jpg"

let newDiv = document.createElement("div");
let newImg = document.createElement("img");

newImg.src = dogUrl;
newDiv.appendChild(newImg);
imageContainer.appendChild(newDiv);

// when button for border is clicked
borderButton.onclick = function(event) {
    event.preventDefault();
    let image = document.querySelector("img");
    // reference to our image
    if (borderPresent) {
        image.style.border = "none";
        borderPresent = !borderPresent;
        borderButton.textContent = "Border";
    }
    else {
        // border is not present
        let color = colorInput.value;
        image.style.border = color + " solid " + borderSizeControl.value + "px";
        borderPresent = !borderPresent;
        borderButton.textContent = "No Border";
    }  
}
colorInput.onchange = function(event) {
    event.preventDefault();
    let Image = document.querySelector("img");

    // when the color input has changed to a new value
    if (borderPresent) {
        Image.style.border = colorInput.value + " solid " + borderSizeControl.value + "px";
    }
}
borderSizeControl.onchange = function(event) {
    event.preventDefault();
    let Image = document.querySelector("img");
    // when the scrolable border size changes change the border size
    let size = borderSizeControl.value;
    // display the value
    borderLabel.innerHTML = size;
    console.log(size);
    if (borderPresent) {
        Image.style.border = colorInput.value + " solid " + size + "px";
    }
}
radiusSizeControl.onchange = function(event) {
    event.preventDefault();
    let Image = document.querySelector("img");
    // when radius changes with the scroll wheel, change the radius
    let size = radiusSizeControl.value;
    // display the value
    radiusLabel.innerHTML = size;
    if (borderPresent) {
        Image.style.borderRadius = size + "px";
    }
}