'use strict';


const insultUrl="https://insult.mattbas.org/api/insult.html";

var proxyUrl = 'https://cors-anywhere.herokuapp.com/';






//////////////// Watch User Form //////////////////////

function watchUserForm() {
    $('form').submit(event => {
        event.preventDefault();        
 
        fetch(proxyUrl + insultUrl)
        
        
        /*.then(response => {
        
          if (response.ok) {
          return response.json();
          }
          throw new Error(response.statusText);
        })
        */
        
        .then((myJson => {
          //renderResult(myJson);
          console.log(myJson);
        }))
        .catch(err => {
          $('#js-error-message').text(`Something went wrong: ${err.message}`);
            }
          ); 
        }) 


      };



    $(watchUserForm);







