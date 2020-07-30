new fullpage("#myContainer", {
  slidesNavigation: true,
  autoScrolling: true,
  scrollBar: true,
});
new WOW().init();

function emailValidate() {
  var email = document.getElementById("email-sub").value;
  if (email == "") alert("Please enter your email");
}
