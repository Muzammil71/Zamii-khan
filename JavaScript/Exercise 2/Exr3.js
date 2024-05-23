var course = {
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
}
document.getElementById("title").innerHTML = `1. The Course:   ${course.title}`;
document.getElementById("categories").innerHTML = `2. The main Category: ${course.categories}`;
document.getElementById("percentage").innerHTML= `3. Percentage of 5 stars reviews: ${course["5_stars_reviews"]}`;