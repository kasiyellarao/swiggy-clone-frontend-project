document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("app").addEventListener("click", function () {
        document.getElementById("banner").scrollIntoView({ behavior: "smooth" });
    });

});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("showMoreBtn").addEventListener("click", function () {
        let moreCities = [
            "Order food online in Lucknow",
            "Order food online in Indore",
            "Order food online in Bhopal",
            "Order food online in Visakhapatnam",
            "Order food online in Nagpur",
            "Order food online in Surat",
            "Order food online in Vadodara",
            "Order food online in Coimbatore",
            "Order food online in Ludhiana",
            "Order food online in Patna",
            "Order food online in Udaipur",
            "Order food online in Pondicherry",
            "Order food online in Aurangabad",
            "Order food online in Jalandhar",
            "Order food online in Kota",
            "Order food online in Madurai",
            "Order food online in Allahabad",
            "Order food online in Manipal",
            "Order food online in Amritsar",
            "Order food online in Bareilly",
            "Order food online in Meerut",
            "Order food online in Bhopal",
            "Order food online in Ooty",
            "Order food online in Bhubaneswar",
            "Order food online in Raipur",
            "Order food online in Bikaner",
            "Order food online in Rajkot",
            "Order food online in Kozhikode",
            "Order food online in Central Goa",
            "Order food online in Sirsa",
            "Order food online in Gwalior",
            "Order food online in Thrissur",
            "Order food online in Kharagpur",
            "Order food online in Tirupati",
            "Order food online in Tirupur",
            "Order food online in Vellore",
            "Order food online in Thiruvananthapuram",
            "Order food online in Warangal",
            "Order food online in Varanasi",
            "Order food online in Mangaluru",
            "Order food online in Patna",
            "Order food online in Ranchi",
            "Order food online in Faridabad",
            "Order food online in Guntur",
            "Order food online in Ujjain",
            "Order food online in Patiala",
            "Order food online in Karnal",
            "Order food online in Kakinada",
            "Order food online in Rajahmundry",
            "Order food online in Bilaspur",
            "Order food online in Bhilai",
            "Order food online in Anand",
            "Order food online in Bhavnagar",
            "Order food online in Jammu",
            "Order food online in Muktsar",
            "Order food online in Panipat",
            "Order food online in Jamshedpur",
        ];

        let cityContainer = document.getElementById("cityContainer");

        moreCities.forEach(city => {
            let div = document.createElement("div");
            div.className = "city-box";
            div.textContent = city;
            cityContainer.appendChild(div);
        });

        this.style.display = "none";
    });
});
