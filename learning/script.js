function getValue(self) 
{
    let value = self.value;

    if (!isNaN(parseFloat(value))) 
    {
        alert("Angka")
    }
    else
    {
        document.getElementById('output').value = ''
        alert("Bukan angka")
    }
}