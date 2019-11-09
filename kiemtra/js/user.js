var listUser = [];
var showlogin = new Array;
var i = -1;
var json = localStorage.getItem("localuser");
if (json != null)
  listUser = JSON.parse(json)
if (listUser == "") {
  var item = {
    email: "admin",
    password: "123",
    firstname: "Hello",
    lastname: "ADMIN"
  }
  this.listUser.push(item)
  localStorage.setItem("localuser", JSON.stringify(listUser));
}
function getData() {
    listUser = JSON.parse(localStorage.getItem("localuser"))
}
function login() {
  var userlogin = document.getElementById("userlogin").value;
  var passwordlogin = document.getElementById("passwordlogin").value;
  var sms = "";
  var x;
  listUser = JSON.parse(localStorage.getItem("localuser"))
  listUser.forEach(function (e) {
    if (userlogin == "admin" && passwordlogin == "123") {
      location.href = "index.html";
      var login = localStorage.getItem("locallogin");
        if (login != null)
        showlogin = JSON.parse(login)
      showlogin = "Hello ADMIN";
      localStorage.setItem("locallogin", JSON.stringify(showlogin));
    } else {
      if (e.email == userlogin) {
        sms = ""
        if (e.password == passwordlogin) {
          location.href = "home.html";
          var login = localStorage.getItem("locallogin");
          if (login != null)
            showlogin = JSON.parse(login)
          showlogin = (e.firstname + "  " + e.lastname);
          localStorage.setItem("locallogin", JSON.stringify(showlogin));
        } else {
          sms = "Mật khẩu không đúng."
        }
      } else {
        if (userlogin == "" && passwordlogin == "") {
          sms = "Bạn chưa nhập tài khoản hoặc mật khẩu đăng nhập."
        } else if (userlogin == "") {
          sms = "Bạn chưa nhập tài khoản."
        } else {
          sms = "Tên tài khoản không tồn tại."
        }
      }
    }
  });
  document.getElementById("sms").innerHTML = sms;
}

window.onload =checklogin();
function checklogin(){
  showlogin = JSON.parse(localStorage.getItem("locallogin"))
  if (showlogin!="") {
    document.getElementById("mess1").innerHTML = '<a style="color:#fff;text-decoration: none;" id="mess" href="#" style="text-decoration: none;">' + showlogin + '</a>'
    document.getElementById("mess2").innerHTML= '<a class="text-danger" id="mess" href="#" style="text-decoration: none;">'+showlogin+'</a>'
    document.getElementById("mess3").innerHTML='<a class="text-muted" style="text-decoration:none;" onclick="dangxuat()" href="#"><i class="fa fa-user"></i><span> Đăng xuất</span></a>'
  }else if(showlogin==""){
    document.getElementById("mess1").innerHTML = '<a style="color:#fff;text-decoration: none;" id="mess" href="#" style="text-decoration: none;">Login</a>'
    document.getElementById("mess2").innerHTML= '<a class="text-danger" id="mess" href="#" style="text-decoration: none;"  data-toggle="modal" data-target="#login">Đăng nhập</a>'
      document.getElementById("mess3").innerHTML='<a class="text-muted" style="text-decoration:none;" href="register.html"><i class="fa fa-user"></i><span> Đăng kí tài khoản</span></a>';
  }
}
function dangxuat(){
  showlogin = JSON.parse(localStorage.getItem("locallogin"))
  showlogin=""
  localStorage.setItem("locallogin", JSON.stringify(showlogin));
  if (showlogin=="") {
     document.getElementById("mess1").innerHTML = '<a style="color:#fff;text-decoration: none;" id="mess" href="#" style="text-decoration: none;">Login</a>'
    document.getElementById("mess2").innerHTML= '<a class="text-danger" id="mess" href="#" style="text-decoration: none;"  data-toggle="modal" data-target="#login">Đăng nhập</a>'
      document.getElementById("mess3").innerHTML='<a class="text-muted" style="text-decoration:none;" href="register.html"><i class="fa fa-user"></i><span> Đăng kí tài khoản</span></a>';
  }
}



