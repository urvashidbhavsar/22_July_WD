function checkValidation() {
  let fname = document.form1.fname.value;
  // here == comparision with a value
  if (fname == "" || fname == null) {
    // alert("enter first name");
    // document.body.style.color = "red";
    document.getElementById("p1").innerHTML = "Enter Firstname";
    document.form1.fname.focus();
    return false;
  }

  let pass = document.form1.pass.value;
  if (pass == "") {
    document.getElementById("p2").innerHTML = "Enter a password";
    document.form1.pass.focus();
    return false;
  } else if (
    pass != "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
  ) {
    document.getElementById("p2").innerHTML =
      "password must be more then 8 char, 1 digit, 1 uppercase, 1 special character";
    document.form1.pass.focus();
    return false;
  }

  let cpass = document.form1.cpass.value;
  if (pass != cpass) {
    document.getElementById("p3").innerHTML =
      "password and confirm password does not match";
    return false;
  }

  // for radio button
  let male = document.form1.gen[0].checked;
  let female = document.form1.gen[1].checked;
  if (male == false && female == false) {
    document.getElementById("p4").innerHTML = "Select Gender";
    return false;
  }

  // for checkbox
  let c1 = document.form1.c1.checked;
  let c2 = document.form1.c2.checked;
  let c3 = document.form1.c3.checked;
  if (c1 == false && c2 == false && c3 == false) {
    document.getElementById("p5").innerHTML = "Select Subject";
    return false;
  }

  // for dropdown
  let city = document.form1.city.value;
  if (city == -1) {
    document.getElementById("p6").innerHTML = "Select City";
    return false;
  }

  let mno = document.form1.mno.value;
  if (mno == "") {
    document.getElementById("p7").innerHTML = "Enter Mobile no";
    document.form1.mno.focus();
    return false;
  } else if (isNaN(mno)) {
    document.getElementById("p7").innerHTML = "Enter digits";
    document.form1.mno.focus();
    return false;
  } else if (mno.length < 10) {
    document.getElementById("p7").innerHTML = "Enter Mobile no in 10 digits";
    document.form1.mno.focus();
    return false;
  } else if (mno.length > 10) {
    document.getElementById("p7").innerHTML =
      "mobile no is more than 10 digits";
    document.form1.mno.focus();
    return false;
  }

  let email = document.form1.email.value;
  if (email == "") {
    document.getElementById("p8").innerHTML = "Enter email";
    document.form1.email.focus();
    return false;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    document.getElementById("p8").innerHTML = "Enter valid email";
    document.form1.email.focus();
    return false;
  }
}
// check a numbers so used IsNaN - not a number function
