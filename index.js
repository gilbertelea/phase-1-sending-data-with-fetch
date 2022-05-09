function submitData(name, email){
    let formData = {
    name: name,
    email: email,
    
  }
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
    const r = fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(function (object) {
    let h2= document.createElement('h2');
    h2.innerHTML= `id: ${object.id}, Name:${object.name}, Email:${object.email}`;
    document.body.appendChild(h2);
    console.log(object)})
    .catch(error => {
        document.body.textContent = error;
        // document.body.appendChild(p);
        // console.error('there was an error!', error);
    })
    return r
}
