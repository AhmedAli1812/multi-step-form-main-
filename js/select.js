document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("toggle");
    const monthlyLabel = document.getElementById("monthly");
    const yearlyLabel = document.getElementById("yearly");
    const yearlyDetails1 = document.getElementById("yearly-details1");
    const yearlyDetails2 = document.getElementById("yearly-details2");
    const yearlyDetails3 = document.getElementById("yearly-details3");

    const monthlydetails1 = document.getElementById("monthly-details1");
    const monthlydetails2 = document.getElementById("monthly-details2");
    const monthlydetails3 = document.getElementById("monthly-details3");

    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");

    const price1 = document.getElementById("price1");
    const price2 = document.getElementById("price2");
    const price3 = document.getElementById("price3");

    const nprice1 = document.getElementById("nprice1");
    const nprice2 = document.getElementById("nprice2");
    const nprice3 = document.getElementById("nprice3");

    toggle.addEventListener("change", function() {
        if (toggle.checked) {
            yearlyLabel.classList.add("active");
            monthlyLabel.classList.remove("active");
            yearlyDetails1.style.display = "block";
            yearlyDetails2.style.display = "block";
            yearlyDetails3.style.display = "block";

            monthlydetails1.style.display = "none";
            monthlydetails2.style.display = "none";
            monthlydetails3.style.display = "none";

            box1.style.height = "153px";
            box2.style.height = "153px";
            box3.style.height = "153px";

            price1.style.display = "none";
            price2.style.display = "none";
            price3.style.display = "none";

            nprice1.style.display = "block";
            nprice2.style.display = "block";
            nprice3.style.display = "block";
        } else {
            monthlyLabel.classList.add("active");
            yearlyLabel.classList.remove("active");
            yearlyDetails1.style.display = "none";
            yearlyDetails2.style.display = "none";
            yearlyDetails3.style.display = "none";

            monthlydetails1.style.display = "block";
            monthlydetails2.style.display = "block";
            monthlydetails3.style.display = "block";

            box1.style.height = "120px";
            box2.style.height = "120px";
            box3.style.height = "120px";

            price1.style.display = "block";
            price2.style.display = "block";
            price3.style.display = "block";

            nprice1.style.display = "none";
            nprice2.style.display = "none";
            nprice3.style.display = "none";
        }
    });

    // Initialize the state
    if (toggle.checked) {
        yearlyLabel.classList.add("active");
        yearlyDetails1.style.display = "block";
        yearlyDetails2.style.display = "block";
        yearlyDetails3.style.display = "block";

        monthlydetails1.style.display = "none";
        monthlydetails2.style.display = "none";
        monthlydetails3.style.display = "none";

        box1.style.height = "153px";
        box2.style.height = "153px";
        box3.style.height = "153px";

        price1.style.display = "none";
        price2.style.display = "none";
        price3.style.display = "none";

        nprice1.style.display = "block";
        nprice2.style.display = "block";
        nprice3.style.display = "block";
    } else {
        monthlyLabel.classList.add("active");
        yearlyDetails1.style.display = "none";
        yearlyDetails2.style.display = "none";
        yearlyDetails3.style.display = "none";

        monthlydetails1.style.display = "block";
        monthlydetails2.style.display = "block";
        monthlydetails3.style.display = "block";

        box1.style.height = "120px";
        box2.style.height = "120px";
        box3.style.height = "120px";

        price1.style.display = "block";
        price2.style.display = "block";
        price3.style.display = "block";

        nprice1.style.display = "none";
        nprice2.style.display = "none";
        nprice3.style.display = "none";
    }
});
