1. Selecting all .story elements:

const stories = document.querySelectorAll('.story');

<!-- This line selects all elements with the class .story (which are the clickable sections inside each article). Each of these elements will be clickable, and when clicked, they will trigger an event to load new content. -->

2. Mapping Article IDs to Images:

const imageMapping = {
  '1': './5.webp',  // Image for Article 1
  '2': './6.jpg',   // Image for Article 2
  '3': './7.webp',  // Image for Article 3
  '4': './8.webp',  // Image for Article 4
  '5': './9.webp',  // Image for Article 5
};
<!-- The imageMapping object is a mapping of article IDs (such as 1, 2, 3, etc.) to the corresponding image URLs. These paths are used later to display the correct image when an article is clicked. -->

3. Setting up Event Listeners for Each .story:

stories.forEach((story) => {
  story.addEventListener('click', () => {
    <!--  handle click event here -->
  });
});
<!-- Here, we're looping through each .story element and adding a click event listener. When any .story is clicked, the code inside the event listener function is executed. -->

4. Getting the Article ID:

const articleId = story.getAttribute('data-article');

<!-- When a .story element is clicked, we fetch the article ID from its data-article attribute. This is what links each story to its specific image and content. -->

5. Clearing the Existing Content:

const topicContainer = document.getElementById('topic');
topicContainer.innerHTML = ''; 

<!-- Clear all content in #topic Before adding new content (the content of the clicked article), we clear the existing content inside the #topic container. This ensures that when a new article is clicked, only its content is shown on the page. -->

6. Applying Styles for New Content:

document.body.style.color = 'black';
topicContainer.style.display = 'flex';
topicContainer.style.flexDirection = 'column';
topicContainer.style.alignItems = 'center';
Next, we apply some styling to the page:

The document.body.style.color = 'black'; 
<!-- changes the text color of the body. -->
<!-- The topicContainer is styled to be a flex container, aligning its children (new content) in a vertical direction. -->

7. Creating the New Content:

const newH2 = document.createElement('h2');
newH2.textContent = `${story.querySelector('h2').textContent}`;

const newP = document.createElement('p');
newP.textContent = `${story.querySelector('p').textContent}`;

<!-- We create new HTML elements (<h2> and <p>) to hold the title and description of the clicked article: -->

story.querySelector('h2').textContent  
<!-- gets the title text from the clicked article. -->

story.querySelector('p').textContent 
<!-- gets the description text from the clicked article. -->

This text is then assigned to the new <h2> and <p> elements, which will be added to the page.

8. Creating the Image Based on the Article ID:

const imageSrc = imageMapping[articleId];

We retrieve the image URL from the imageMapping object, using the articleId. If the articleId is 1, the image URL will be './5.webp'. We then create a new image element and set its src to the corresponding image URL.


const newImage = document.createElement('img');
newImage.src = imageMapping[articleId]; 
<!-- Set the image source dynamically -->
newImage.alt = 'An image for article ';

<!-- The newImage is an <img> element that will be added to the page. The src attribute is dynamically set using the imageMapping object. -->

9. Appending the New Content:

topicContainer.appendChild(newH2);
topicContainer.appendChild(newP);
topicContainer.appendChild(newImage);
topicContainer.appendChild(newLink);

<!-- Finally, the new content (title, description, image) is appended to the #topic container, so it becomes visible on the page. -->