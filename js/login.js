$(document).ready(function () {
  let userData = JSON.parse(localStorage.getItem('userdetails'))
  if(userData){
    console.log(userData.username);
    var username = userData.username;
    var password = userData.password;
    console.log(username);
    if (username != "" && password != "") {
      $.ajax({
        url: "http://localhost:3000/php/login.php",
        crossDomain: true,
        type: "POST",
        data: { username: username, password: password },
        success: function (response) {
          console.log(response);
          
            alert(response)
          
        },
      });
    }
  }
  $("#but_submit").click(function () {
    var username = $("#txt_uname").val().trim();
    var password = $("#txt_pwd").val().trim();
    console.log("dfghj")
    $("#txt_uname").val(" ")
    $("#txt_pwd").val(" ")
    if (username != "" && password != "") {
      $.ajax({
        url: "http://localhost:3000/php/login.php",
        crossDomain: true,
        type: "POST",
        data: { username: username, password: password },
        success: function (response) {
          if(response=="ok"){
            
          }
          else{
            alert(response)
          }
        },
      });
    }
  });
});
