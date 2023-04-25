const email = document.querySelector(".footer__email__address");
const button = document.querySelector(".footer__email__button");
const errorMsg1 = document.querySelector(".footer__email__error-msg-1");
const errorMsg2 = document.querySelector(".footer__email__error-msg-2");

button.addEventListener("click", () => {
   if (email.value.length === 0) {
      errorMsg1.style.display = "block";
      errorMsg2.style.display = "none";
   } else if (!validateEmail(email.value)) {
      errorMsg1.style.display = "none";
      errorMsg2.style.display = "block";
   } else {      
      errorMsg1.style.display = "none";
      errorMsg2.style.display = "none";
   }
});

const validateEmail = (email) => {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
      return regex.test(email);
}