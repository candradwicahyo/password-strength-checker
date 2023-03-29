window.onload = () => {
  
  const input = document.querySelector('.input');
  const icon = document.querySelector('.icon');
  
  function showAndHidePassword() {
    icon.addEventListener('click', function() {
      if (input.getAttribute('type') == 'password') {
        this.classList.replace('fa-eye', 'fa-eye-slash');
        input.setAttribute('type', 'text');
      } else {
        this.classList.replace('fa-eye-slash', 'fa-eye');
        input.setAttribute('type', 'password');
      }
    });
  }
  
  showAndHidePassword();
  
  const letter = /[a-zA-Z]/;
  const number = /[0-9]/;
  const symbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  
  const text = document.querySelector('.text');
  input.addEventListener('keyup', function() {
    const value = this.value;
    validate(value);
  });
  
  function validate(value) {
    if (value == false) {
      stylingInput('#333', '#f3f3f3');
      message('#333');
    }
    if (value.match(letter) || value.match(number) || value.match(symbol)) {
      stylingInput('red', 'red');
      message('red', 'password is weak!');
    }
    if (value.match(letter) && value.match(number) && value.length >= 6) {
      stylingInput('#b4ad3a', '#b4ad3a');
      message('#b4ad3a', 'password is medium!');
    }
    if (value.match(letter) && value.match(number) && value.match(symbol) && value.length >= 8) {
      stylingInput('#4caf50', '#4caf50');
      message('#4caf50', 'password is strong!');
    }
  }
  
  function stylingInput(color, borderColor) {
    input.style.color = !color ? '#333' : color;
    input.style.border = `1px solid ${!borderColor ? '#f3f3f3' : borderColor}`;
  }
  
  function message(color, value) {
    text.style.color = !color ? '#333' : color;
    text.textContent = !value ? '' : value;
  }
  
}