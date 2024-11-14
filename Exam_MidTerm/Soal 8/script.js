document.getElementById('toggleButton').addEventListener('click', function() {
    // Tambahkan logika untuk toggle mode gelap dan terang
    var badan = document.getElementById('as');
    var hitam = this.innerHTML;
    console.log(hitam)
    if (hitam == "Mode Gelap") 
    {
        
        badan.style.color = "white";    
        badan.style.backgroundColor = "black";
        this.style.backgroundColor = "darkorange"
        this.style.color = "white"
        this.innerHTML = "Mode Terang" 
    }
    else
    {
        badan.style.color = "black";    
        badan.style.backgroundColor = "white";
        this.style.backgroundColor = "cyan"
        this.style.color = "black"
        this.innerHTML = "Mode Gelap" 
    }
});
