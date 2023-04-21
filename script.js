function getIfscDetail() {
  let ifsc = document.getElementById("ifsc").value;
  let options = {
    method: "GET",
  };
  let url = "https://ifsc.razorpay.com/" + ifsc;
  let req = fetch(url, options);
  req
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("bank_name").value = data["BANK"];
      // console.log(data)
      document.getElementById("branch").value = data["BRANCH"];
      // console.log(data);
      document.getElementById("city").value = data["CITY"];
      // console.log(data);
      document.getElementById("name").value = data["BANKCODE"];
      // console.log(data);
      document.getElementById("centre").value = data["CENTRE"];
    });
}
