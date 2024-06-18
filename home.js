fetch('https://fakestoreapi.com/products/category/electronics')
  .then((response) => response.json())
  .then((data) => {
    let data1 = "";
    data.forEach((item) => {
      data1 += `<div class="card">
        <h1 class="title">${item.title}</h1>
        <img src="${item.image}" alt="img" class="images">
        <p>${item.description}</p>
        <p class="category">${item.category}</p>
        <p class="price">$${item.price}</p>
      </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
