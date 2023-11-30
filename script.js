

function searchBtn(){
  var movieName = document.getElementById("fname").value
  console.log( movieName);

       if( movieName==""){
           alert("Please enter the field !")
       }else{
           fetch(`https://www.omdbapi.com/?apikey=df82801&t=${movieName}`) 
           .then(data=>data.json())
           .then(movieDet=> displayBtn(movieDet))
           }
       }

           function displayBtn(movieDet){
                  htmlData=`<h3>${movieDet.Title}(${movieDet.Year})</h3>
                  <p><b>Plot:</b>${movieDet.Plot}</p> <br>
                  <p><b>Director:</b>${movieDet.Director}</p>
                  <p><b>Actors:</b></b>${movieDet.Actors}</p> 
                  <p><b>Ratings:</b>
                  <ul>
                      <li>${movieDet.Ratings[0].Source}:${movieDet.Ratings[0].Value}</li>
                  </ul>
                  </p>`
              result.innerHTML = htmlData
               }
              
