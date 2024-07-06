


export default function AllPostsPage(){



    async function fetchAndRenderGameForm() {
        const response = await fetch(
          "https://team-project-0ss1.onrender.com/reviews"
        );
        const userReviews = await response.json();
        console.log(userReviews);
        const reviewDiv = document.getElementById("review-info-container");
        reviewDiv.innerHTML = "";




}