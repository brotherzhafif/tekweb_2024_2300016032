document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Tambahkan validasi untuk setiap input.
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let message = document.getElementById("message")
    let error = document.getElementById("error")
    let msg = "";

    if(name.value === "") 
        msg += "Nama Kosong ";
    else if(!email.value.includes('@'))
        msg += "Emailnya Salah ";
    if(message.value.length < 20)
        msg += "Pesan Kurang Panjang  " 
    
    error.innerHTML = msg
});
