// javascript: (function () {
//   alert("hello");
// })()
(function () {
  console.log("bookmarklert starting");
  let paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = "kitten";
  }
})();

// (function(){let script = document.createElement('script');script.src = 'chromeExtension.js';document.body.appendChild(script);})();