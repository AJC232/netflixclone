fetch('jumbo.json')
  .then(function (response) {
     return response.json();
  })
  .then(function (data) {
      appendData(data);
  })
  .catch(function (err) {
      console.log(err);
  });

function appendData(data) {  
  let jumbotron = document.querySelector(".jumbotron");

  for (let i=0;i<data.length;i++) {
      let div = document.createElement("div");
      let text = document.createElement("div");
      let h1 = document.createElement("h1");
      let h2 = document.createElement("h2");
      let hr = document.createElement("hr");
      text.className = "text";
      h1.innerHTML = data[i].maintext;
      h2.innerHTML = data[i].subtext;
      text.appendChild(h1);
      text.appendChild(h2);
      let graphic = document.createElement("div");
      let img = document.createElement("img");
      graphic.className = "graphic";
      img.src = data[i].img;
      graphic.appendChild(img);
      if (data[i].id%2!=0) {
        div.appendChild(text);
        div.appendChild(graphic);
      }
      else{
        div.appendChild(graphic);  
        div.appendChild(text);
      }
      jumbotron.appendChild(div);
      jumbotron.appendChild(hr);
  }
}

fetch('faqs.json')
  .then(function (response) {
     return response.json();
  })
  .then(function (data) {
      appendFaqs(data);
  })
  .catch(function (err) {
      console.log(err);
  });

function appendFaqs(data) {
    let ul = document.querySelector(".faqs");
    for (let i=0;i<data.length;i++) {
      var li = document.createElement("li");
      let button = document.createElement("button");
      var questionDiv = document.createElement("div");
      var ansDiv = document.createElement("div");
      let br = document.createElement("br");
      ansDiv.className = "ansDiv";
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      p1.innerHTML = data[i].text;
      p2.innerHTML = data[i].extext;
      ansDiv.appendChild(p1);
      ansDiv.appendChild(p2);
      button.className = "btn active";
      let imgPlus = document.createElement("img");
      let imgCross = document.createElement("img");
      imgPlus.src = "plus.png";
      imgPlus.id = "plus";
      imgCross.id = "cross";
      imgCross.src = "cross.png";
      questionDiv.innerHTML = data[i].question;
      button.appendChild(questionDiv);
      questionDiv.appendChild(imgPlus);
      questionDiv.appendChild(imgCross);
      li.appendChild(button);
      li.appendChild(ansDiv);
      ul.appendChild(li);
    }   
    
var coll = document.getElementsByClassName("btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
}