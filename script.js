run();

function run() {
  const bloatElementClasses = [
    "c93Gbe", //Footer1
    "gNO89b", //Button1
    "RNmpXc", //Button2
    "FPdoLc", //ButtonWrapper
    "lJ9FBc", //ButtonWrapper
    "goxjub", //Microfone
    "Gdd5U", //Picture search
    "lnXdpd", //Google picture
    "LX3sZb", //Top bar
    "GVqCqe", //Share icon
  ];

  deleteBloatElements(bloatElementClasses);
}

function deleteBloatElements(bloatElementClasses) {
  bloatElementClasses.map((bloatClass) => {
    const bloatElements = document.getElementsByClassName(bloatClass);
    if (bloatElements.length >= 1) {
      for (let e of bloatElements) {
        remove(e);
      }
    }
  });
}

function remove(element) {
  element.parentNode.removeChild(element);
}
