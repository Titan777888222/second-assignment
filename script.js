//Сначала сделай страничку и покажи там cпинер, потом получи данные  c fetch и await и вставь цитату, ну как то так :)
 //Не усложняй!)
 //спинер
 fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(json => {

    let next = document.querySelector("#liste");
    let i = 0;     
    
    next.addEventListener("click", function() {   
      i++; 
      console.log(Math.ceil(Math.random() * 1000)) //< json.length

        setTimeout( () => {              
        document.querySelector(".text1").innerHTML = (json[i].text); 
        document.querySelector(".text2").innerHTML = (json[i].author);      
        }, 2000) 
      }
    )
});