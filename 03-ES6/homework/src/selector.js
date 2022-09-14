var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") {
    return "id";
  }
  if (selector[0] === ".") {
    return "class";
  }
  if (selector.includes(".")) {
    return "tag.class";
  }
  return "tag";
};
var selector = "felipe.hola";
console.log(selectorTypeMatcher(selector));

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (elemento) => "#" + elemento.id === selector;
  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      let clases = elemento.classList;
      for (let i = 0; i < clases.length; i++) {
        if ("." + clases[i] === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (elemento) => {
      let splitted = selector.split(".");
      let tag = splitted[0];
      let clases = splitted[1];
      return (
        matchFunctionMaker(tag)(elemento) &&
        matchFunctionMaker("." + clases)(elemento)
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = (elemento) => elemento.tagName.toLowerCase() === selector;
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
