let picked = localStorage.getItem("picked");
if (picked == undefined) {
  picked = [];
}
document.getElementById("picked").innerHTML = picked.length - 1;
//creates efficient loading of the website
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  //creates the shop with the products from products.json
  fetch("products.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let clothes = [];
      let picked = [];
      function setOne(event) {
        setter = 0;
      }

      function setTwo(event) {
        setter = 1;
      }
      function setThree(event) {
        setter = 2;
      }
      function setFour(event) {
        setter = 3;
      }

      function setSix(event) {
        setter = 5;
      }
      function setSeven(event) {
        setter = 6;
      }
      function setEight(event) {
        setter = 7;
      }
      function setNine(event) {
        setter = 8;
      }
      function setTen(event) {
        setter = 9;
      }
      function setEleven(event) {
        setter = 10;
      }
      function setTwelve(event) {
        setter = 11;
      }
      function setThirteen(event) {
        setter = 12;
      }
      function setFourteen(event) {
        setter = 13;
      }
      function setFifteen(event) {
        setter = 14;
      }
      function setSixteen(event) {
        setter = 15;
      }
      function setSeventeen(event) {
        setter = 16;
      }
      function setEighteen(event) {
        setter = 17;
      }
      function setNineteen(event) {
        setter = 18;
      }
      function setTwenty(event) {
        setter = 19;
      }
      function setTwentyOne(event) {
        setter = 20;
      }
      function setTwentyTwo(event) {
        setter = 21;
      }
      function setTwentyThree(event) {
        setter = 22;
      }
      function setTwentyFour(event) {
        setter = 23;
      }
      function setTwentyFive(event) {
        setter = 24;
      }
      function setTwentySix(event) {
        setter = 25;
      }
      function setTwentySeven(event) {
        setter = 26;
      }
      function setTwentyEight(event) {
        setter = 27;
      }
      function setTwentyNine(event) {
        setter = 28;
      }
      function setThirty(event) {
        setter = 29;
      }
      function setThirtyOne(event) {
        setter = 30;
      }
      function setThirtyTwo(event) {
        setter = 31;
      }
      function setThirtyThree(event) {
        setter = 32;
      }
      function setThirtyFour(event) {
        setter = 33;
      }
      function setThirtyFive(event) {
        setter = 34;
      }
      function setThirtySix(event) {
        setter = 35;
      }
      function setThirtySeven(event) {
        setter = 36;
      }
      function setThirtyEight(event) {
        setter = 37;
      }
      function setThirtyNine(event) {
        setter = 38;
      }
      function setFourty(event) {
        setter = 39;
      }
      function setFourtyOne(event) {
        setter = 40;
      }
      function setFourtyTwo(event) {
        setter = 41;
      }
      function setFourtyThree(event) {
        setter = 42;
      }
      function setFourtyFour(event) {
        setter = 43;
      }
      function setFourtyFive(event) {
        setter = 44;
      }
      function setFourtySix(event) {
        setter = 45;
      }
      function setFourtySeven(event) {
        setter = 46;
      }
      function setFourtyEight(event) {
        setter = 47;
      }
      function setFourtyNine(event) {
        setter = 48;
      }

      class Cloth {
        constructor(number) {
          this.number = number;
          this.title = data.items[number].fields.title;
          this.price = data.items[number].fields.price;
          this.image = data.items[number].fields.image.fields.file.url;
          document.getElementById("title" + number).innerHTML = this.title;
          document.getElementById("price" + number).innerHTML = this.price;
          document.getElementById("img" + number).src = this.image;
        }
      }
      clothes.push(new Cloth(26));
      localStorage.setItem("clothes", JSON.stringify(clothes));
      clothes.push(new Cloth(9));
      localStorage.setItem("clothes", JSON.stringify(clothes));
      clothes.push(new Cloth(41));
      localStorage.setItem("clothes", JSON.stringify(clothes));
      clothes.push(new Cloth(3));
      localStorage.setItem("clothes", JSON.stringify(clothes));
      clothes.push(new Cloth(21));
      localStorage.setItem("clothes", JSON.stringify(clothes));
      clothes.push(new Cloth(31));
      localStorage.setItem("clothes", JSON.stringify(clothes));
      clothes.push(new Cloth(5));
      localStorage.setItem("clothes", JSON.stringify(clothes));
      clothes.push(new Cloth(36));
      localStorage.setItem("clothes", JSON.stringify(clothes));

      document.getElementById("picked").innerHTML = picked.length;
    });

  //makes sure the add to cart button works by adding objects
}
