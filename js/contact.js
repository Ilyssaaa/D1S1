function submitData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("repassword").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    return alert("Nama harus diisi!");
  } else if (email == "") {
    return alert("Email harus diisi!");
  } else if (password == "") {
    return alert("Password harus diisi!");
  } else if (confirmpassword == "") {
    return alert("Confirm Password harus dipilih!");
  } else if (message == "") {
    return alert("Message harus diisi!");
  }

    let emailReceiver = "ilyasaajbrudinn14@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${name}&body=Halo, nama saya ${name}, ${message}, silakan kontak saya pada email ${email}, ${password}, ${confirmpassword}`;
  a.click();

  // https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=${message}

  let data = { name, email, password, confirmpassword, message };

  console.log(data);
}