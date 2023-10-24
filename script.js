function validateForm(){
  //gets the values from the HTML form
  let initialPassword  = document.forms["form"]["password"].value;
  let reenteredPassword = document.forms["form"]["confirm_password"].value;
  let username = document.forms["form"]["username"].value;
  let usernameList = ["Admin", "Harry", "Elizabeth", "Shana"]; //declares an array of usernames so no one can create accounts using these usernames
  
  if(initialPassword  !== reenteredPassword){ //compares the first and reentered passwords
    alert("Passwords do not match");
    return false;
  }else{
    for(let i = 0; i < usernameList.length; i++){
      if (username === usernameList[i]){ //compares the username entered and the username at the current index i in the for loop
        alert("That username is already taken");
        return false;
      }
    }
    usernameList.push(username); //adds the username to the list of usernames so others can't user it
  }
  return true;
}

//I used this website to learn how loops work in JavaScript since I was unsure if the syntax was different https://www.freecodecamp.org/news/how-to-loop-through-an-array-in-javascript-js-iterate-tutorial/ as well as this website https://www.w3schools.com/js/js_loop_for.asp
//I used this website as reference when learning about arrays https://www.w3schools.com/js/js_arrays.asp
//I took inspiration from this website when it came to the validation function https://www.w3schools.com/js/js_validation.asp 