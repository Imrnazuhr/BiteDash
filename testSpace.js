const products = [
    { name: "Quran", category: "Books", price: 20 },
    { name: "Prayer Mat", category: "Accessories", price: 15 },
    { name: "Miswak", category: "Accessories", price: 3 },
    { name: "Islamic Book", category: "Books", price: 10 },
    { name: "Tasbeeh", category: "Accessories", price: 5 }
  ];
  
  // Function to display products with the name highlighted
  function displayProducts(productArray) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Clear the current list
  
    for (let i = 0; i < productArray.length; i++) {
      const listItem = document.createElement("li");
      listItem.className = "product"; // Add the class for styling
  
      // Highlight the product name
      const productName = document.createElement("strong");
      productName.textContent = productArray[i].name;
  
      // Add the rest of the details
      const productDetails = document.createTextNode(
        ` - Category: ${productArray[i].category}, Price: $${productArray[i].price}`
      );
  
      // Append the product name and details to the list item
      listItem.appendChild(productName);
      listItem.appendChild(productDetails);
  
      // Append the list item to the product list
      productList.appendChild(listItem);
    }
  }
  
  // Initial display of all products
  displayProducts(products);
  
  // Dropdown filter functionality
  const filterCategory = document.getElementById("filterCategory");
  filterCategory.addEventListener("change", () => {
    const selectedCategory = filterCategory.value;
  
    // Filter products based on the selected category
    const filteredProducts = selectedCategory === "all"
      ? products
      : products.filter(product => product.category === selectedCategory);
  
    // Display the filtered products
    displayProducts(filteredProducts);
  });


  const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", () => {
  const searchValue = searchBox.value.toLowerCase();
  const searchedProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchValue)
  );

  // Display the searched products
  displayProducts(searchedProducts);
});