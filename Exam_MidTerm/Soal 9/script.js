document.getElementById('dropdownButton').addEventListener('click', function() {
    // Tambahkan logika untuk toggle tampil atau sembunyikan dropdown

    let dropdown = document.getElementById("dropdownMenu")

    if (dropdown.style.display === "none") 
        dropdown.style.display = "flex"
    else
        dropdown.style.display = "none"
});
