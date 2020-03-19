var helloElement = document.getElementsByTagName("h1")[0];

  helloElement.onclick = function(e) {
    helloElement.innerHTML = "How Dare you !";
  };

  var item1 = document.getElementsByTagName("li")[1];

  item1.innerHTML = "click me";
  
  item1.onclick = function(e) {
    var newItem = document.createElement("li");
    newItem.innerHTML = "new Item";

    document.getElementsByTagName("ul")[0].append(newItem);
  };