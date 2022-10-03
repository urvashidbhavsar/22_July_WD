function checkValidation() {
  let fname = document.form1.fname.value;
  // here == comparision with a value
  if (fname == "" || fname == null) {
    // alert("enter first name");
    // document.body.style.color = "red";
    document.getElementById("p1").innerHTML = "Enter Firstname";
    return false;
  }

  let pass = document.form1.pass.value;
  if (pass == "") {
    document.getElementById("p2").innerHTML = "Enter a password";
    return false;
  }

  let cpass = document.form1.cpass.value;
  if (pass != cpass) {
    document.getElementById("p3").innerHTML =
      "password and confirm password does not match";
    return false;
  }
}
