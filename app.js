fetch("https://restcountries.com/v3.1/all ")
    .then( res=> res.json())
    .then(data=>{
        console.log(data)
        for (let i = 0; i < data.length; i++){
            let flagImg = document.createElement("img")

        let button = document.createElement("a")
        button.className = "btn btn-primary d-flex"

        let ul = document.createElement("ul")
        let h3 = document.createElement("h3");

        let liRegion = document.createElement("li");
        let liSub = document.createElement("li");
        let liArea= document.createElement("li");

        let flagsDiv = document.createElement("div");

        let flagListdiv = document.querySelector("#flag-list")
      
            flagImg.setAttribute("src", data[i].flags.png)
            button.setAttribute("href", data[i].maps.googleMaps)


            h3.innerText = data[i].altSpellings[1]
            liRegion.innerText = data[i].region
            liSub.innerText = data[i].subregion
            liArea.innerText = data[i].area
            button.innerHTML = "MAPS"

            ul.appendChild(liRegion)
            // ul.style.marginTop="4px"
            ul.appendChild(liArea)
            // ul.style.marginTop="4px"
            ul.appendChild(liSub)
            // ul.style.marginTop="50px"

            flagsDiv.appendChild(flagImg)

            flagsDiv.appendChild(h3)
            flagsDiv.appendChild(ul)
            flagsDiv.appendChild(button)

            flagListdiv.appendChild(flagsDiv)
            // style 
            ul.style.listStyleType = "none"
            flagListdiv.style.display = "flex"
            flagsDiv.style.margin = "50px"
            flagsDiv.style.borderRadius = "10px"
            flagsDiv.style.width = "299px"
            flagsDiv.style.height = "600px"
            flagsDiv.style.border = "3px solid black"
            flagImg.style.width = "100%"
            flagImg.style.overflow = "hidden"

            // wrap
            flagListdiv.style.flexWrap = "wrap"
            button.style.width = "100px"
        }
         }
            )