// 97 - This keyword in practice

const thisKey = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};

thisKey(2000);

const annshiv = {
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

annshiv.calcAge();
