document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("report-button");
    const today = new Date();
    const day = today.getDate();

    // Tarihe göre sınıf ekleme
    if (day >= 20 && day <= 23) {
        button.classList.add("sari");
    } else if (day >= 25 && day <= 27) {
        button.classList.add("kirmizi");
    } else {
        button.classList.add("default");
    }

    // Butona tıklama olayını tanımlama
    button.addEventListener("click", function () {
        window.location.href = "https://www.google.com";
    });
});
