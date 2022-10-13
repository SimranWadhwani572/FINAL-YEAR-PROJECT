

async function uploadFile() {
    let formData = new FormData();           
    formData.append("file", image_input.files[0]);
    await fetch('http://20.235.121.193:5000/predict', {
      method: "POST", 
      body: formData

    })  
    .then(response=> response.json()).then(data=> 
        {
            console.log(data.price);
            var price = data.price;
            document.getElementById("myprice").innerHTML = price;


  
        })
    alert('The file has been uploaded successfully.');
}

uploadFile();

