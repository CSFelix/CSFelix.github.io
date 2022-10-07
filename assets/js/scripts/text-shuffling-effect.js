window.addEventListener('load', init);

function init() {
  /*
    Capturing all elements with 'toShuffle' class and setting up
  each condition to trigger the action.  
  */
  let effectList = [];
  const elementList = document.querySelectorAll('.toShuffle');

  for (let i = 0; i < elementList.length; i++) {

    const element = elementList[i];
    element.dataset.index = i;

    // Condition 1: starts shuffling when the page is loaded
    effectList[i] = new ShuffleText(element);

    // Condition 2: shuffles when the pointer is over the text
    element.addEventListener('mouseenter', function () {
      effectList[+this.dataset.index].start();
    });

    // starts the shuffling everytime a condition is true
    effectList[i].start();
  }
}