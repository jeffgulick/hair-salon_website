const flip = () => {
    const x = document.getElementById("logo");
    x.classList.add('animate__animated', 'animate__flip');
    //This removes the class "animate" and sets back to default class//
    x.addEventListener('animationend', () => {
        x.classList.remove('animate__animated', 'animate__flip')
      });
  }
  