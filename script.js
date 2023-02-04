run();
//TODO: dont remove but keep neccessary
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
    "qarstb", //div under search bar
  ];

  deleteBloatElements(bloatElementClasses);

  const raiseZIndexElementClasses = [
    "RNNXgb", //search bar
    "gLFyf", //input box important
    "dRYYxd", //right side search bar
    "vZr2rb", //input div wrapper
    "iblpc", //left side
    "SDkEP", //search bar inner wrapper
  ];
  raiseZIndexElements(raiseZIndexElementClasses);
}

function raiseZIndexElements(raiseZIndexElementClasses) {
  raiseZIndexElementClasses.map((c) => {
    const raiseZIndexElements = document.getElementsByClassName(c);
    if (raiseZIndexElements.length >= 1) {
      for (let e of raiseZIndexElements) {
        e.style.zIndex = 100;
      }
    }
  });
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
