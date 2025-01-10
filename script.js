const food = [
    {id: "f01", name: "Nasi Lemak", category: "Main Dish", price: "5.50", vendor: "Nasi Lemak Burung Merpati", ingredient: "rice, coconut milk, pandan leaves, anchovies, peanuts, hard-boiled eggs, cucumber, and sambal", description: "Nasi lemak is a fragrant Malaysian dish featuring coconut rice, sambal, anchovies, peanuts, boiled egg, and cucumber.", rating: "4.2", image: "nasi_lemak.jpeg"},
    {id: "f02", name: "Roti Canai", category: "Appetizer", price: "1.30", vendor: "Mamak Soddom", ingredient: "flour, water, salt, sugar, ghee or oil, and optional egg", description: "Roti canai is a flaky, crispy Malaysian flatbread, often served with curry, dhal, or sweet condensed milk.", rating: "4.5", image: "roti_canai.jpg"},
    {id: "f03", name: "Mee Goreng", category: "Main Dish", price: "6", vendor: "K-Bistro", ingredient: "noodles, garlic, onion, chili, soy sauce, tomato ketchup, shrimp, cabbage, tofu, egg, and seasoning", description: "Mee goreng is a flavorful Malaysian stir-fried noodle dish with soy sauce, spices, vegetables, tofu, and optional protein.", rating: "3.7", image: "mee_goreng.webp"},
    {id: "f04", name: "Peach Strudel", category: "Dessert", price: "8", vendor: "Jenny Hills", ingredient: "fresh peaches, puff pastry, sugar, cinnamon, lemon juice, cornstarch, vanilla extract, and butter", description: "Peach strudel is a flaky pastry filled with sweet, spiced peaches, often served warm with powdered sugar.", rating: "5", image: "peach_strudel.jpg"},
    {id: "f05", name: "Lasagna", category: "Appetizer", price: "10", vendor: "Mama Rich", ingredient: "Ground beef, ricotta cheese, mozzarella cheese, Parmesan cheese, marinara sauce, lasagna noodles, eggs, garlic, onion, olive oil, salt, and pepper", description: "Lasagna is an Italian dish made of layered pasta, meat, cheese, and marinara sauce, baked until golden.", rating: "4.9", image: "lasagna.jpg"},
    {id: "f06", name: "Curly Fries", category: "Snack", price: "6",  vendor: "WackDonalds", ingredient: "potatoes, vegetable oil, cornstarch, flour, paprika, garlic powder, onion powder, salt, and pepper", description: "Curly fries are seasoned, spiral-cut potatoes, deep-fried to a crispy texture, often served as a snack or side dish.", rating: "4.8", image: "curly_fries.jpg"}
];

const currentPage = window.location.pathname.split("/").pop();

function navigateToPage(page) {
    window.location.href = page;
}

if(currentPage === "main.html") {
    
    const foodList = document.getElementById("food-list");
    const filterCategory = document.getElementById("filter-category");

    displayFood(food);

    filterCategory.addEventListener("change", () => {
        const selectedCategory = filterCategory.value;
        const filteredFood = selectedCategory === "all"
        ? food
        : food.filter(food => food.category === selectedCategory);
        displayFood(filteredFood);
    });

    function displayFood(foodItem) {
        foodList.innerHTML = "";
        foodItem.forEach(food => {
            const foodDiv = document.createElement("div");
            foodDiv.className = "food-item";
            foodDiv.onclick = () => navigateToPage(`food_item.html?id=${food.id}`);
            foodDiv.innerHTML = `
                <img src=${food.image}>
                <h3>${food.name}</h3>
                `;
            foodList.appendChild(foodDiv);
            });
    }
} else if(currentPage === "food_item.html") {
    const params = new URLSearchParams(window.location.search);
    const foodId = params.get("id");
    const selectedFood = food.find(food => food.id === foodId);

    if(selectedFood) {
        document.getElementById("food-title").textContent = selectedFood.name;
        document.getElementById("food-description").textContent = selectedFood.description;
        document.getElementById("food-ingredient").textContent = selectedFood.ingredient;
        document.getElementById("food-rating").textContent = selectedFood.rating;
        document.getElementById("food-image").src = selectedFood.image;
    }
}

function registered() {
    document.getElementById("registered-status").textContent = "Your account has been registered!";
}