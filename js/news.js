const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCategories(data.data));
};
const showCategories = data =>{
    console.log(data)
    // capture  categories container data in nav bar
    const categoriesContainer = document.getElementById('categories-container');
    data.news_category.forEach(singleCategory=>{
    //  console.log(singleCategory);
    categoriesContainer.innerHTML += `
    <a class = "nav-link" href="#">${singleCategory?.category_name}</a>`
    });
    
}