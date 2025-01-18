// Select all the .story elements
const stories = document.querySelectorAll('.content');

// Mapping of articleId to image URLs
const imageMapping = {
  '1': './5.webp',  // Image for Article 1
  '2': './6.webp',  // Image for Article 2
  '3': './7.webp',  // Image for Article 3
  '4': './8.webp',  // Image for Article 4
  '5': './9.webp',  // Image for Article 5
};

const newArticle = {
  '1':'I thought I was destined to be a night owl forever. I’m no stranger to reading about the benefits of waking up early or having the same sleeping routine — all of us have probably read this at some point in our lives. I’m in my final semester of university, so the past few years of my life have been absolute chaos. I have classes some days, work other days, and have free time on especially rare days. Having a routine seemed impossible.But a few months ago, I started reading Haruki Murakami’s novels. My favorite is Norwegian Wood. Inspired by Murakami’s fascinating prose, I researched him a little.',
  '2':'The drawer sticks because history repeats itself even in the smallest ways — like muscle memory, like scar tissue, like those nights you wake up with your teeth already clenched against whatever’s trying to crawl out of your subconscious. You know the ones. 3 a.m. and your mouth tastes like pennies you swallowed as a kid when you still thought copper could buy wishes.It jerks free with that same screech I heard in Room 104, where my grandmother lay dying. Because I’m the kind of idiot who waited until someone was hooked up to machines that beeped out their remaining heartbeats to ask about family curses. Mom had gotten drunk one night, told me Grandma and Dad had somehow hexed me into a life of perpetual shit luck — some old country superstition that apparently carried more weight than years of me just making spectacularly bad choices on my own.So there I was, standing next to a hospital bed that screamed like this drawer every time she moved, asking a dying woman if she’d cursed me. Her expression — Christ. Turned out I didn’t need any supernatural help to make my life harder. I was managing that just fine on my own.My fingers know where everything is before my eyes do. Muscle memory’s a bitch like that. Keeps score when you’re not looking.',
  '3':'Towards the end of September, I decided to throw myself into learning Swedish. As someone who has studied many languages over the years, including three to fluency, I consider myself a reasonably successful language learner. Naturally, I wanted to draw on my past experiences to find the most efficient way to learn a new language.My first experience with language learning was purely academic. In school, I studied French, later adding Latin and German. Lessons were textbook-based, teacher-led, and heavily focused on tests. I performed well, so it was a shock when I visited France for the first time and found I barely understood a word.I went on to study French, Italian and Spanish at university. Spending a year abroad was a compulsory part of my university degree. It made such an impact that I concluded the best way to learn a language must surely be immersion, not academic study.',
  '4':'It took almost a century of thought before existentialism came to fruition as a popular movement — almost a craze — in post-war France in the nineteen-forties and fifties. This was the time of its greatest influence, not only on philosophy but also on literature, drama and film-making, extending far beyond France. But here I am dealing with existentialism solely as a school of philosophy — one which arose mainly from the work of five men and one woman: Søren Kierkegaard, Friedrich Nietzsche, Edmund Husserl, Martin Heidegger, Jean-Paul Sartre, and Simone de Beauvoir. (Although Albert Camus is often called an existentialist, he himself denied he was one). Of these, Sartre was the only one to accept the name ‘existentialist’ and employ all of its key concepts: ‘anguish’, ‘bad faith’, ‘facticity’, ‘commitment’, and ‘authenticity’.Existentialism reflects the intellectual climate of a crisis. It is the expression of change. It displays an attitude towards that which must be left behind as well as towards that which is now to come and must be faced. Looking back, it shows us the ruins of our former security, of the laws and standards that made us feel safe and sheltered. In lulling us into this sense of security, however, they also caused ‘alienation’, rendering what is essential to…',
  '5':'Years ago, I wrote a short piece about a genius who lived in my attic and smelled of garlic and old sweat. True story. I showed it to Abigail Thomas, the renowned memoirist and former literary agent, and she said she really liked it. She suggested I expand it into a larger story, but I didn’t know how to do that at the time. I’d written everything I thought I knew about the memory. I’d told all the interesting bits. There wasn’t anymore. The memory itself was intriguing because life is strange, but it didn’t go anywhere. It was just a curiosity. It wasn’t even a story, it was an anecdote, which is not the same thing. I didn’t know how to take it any further.I’m using the word story here to stand for a complete essay with a beginning, middle, and end, where the writer overcomes some obstacle, a truth is learned, or some other sort of meaningful shit occurs. An anecdote is just something that happened — an incident. You go to the dentist and someone says something funny. It might be an amusing bit for the dinner…'
}

// Add click event listener to each .story element
stories.forEach((story) => {
  story.addEventListener('click', () => {
    // Get the article ID from the data-article attribute of the clicked story
    const articleId = story.getAttribute('data-article');


    // Clear the content of the entire page (for the #topic container)
    const topicContainer = document.getElementById('topic');
    topicContainer.innerHTML = ''; // Clear all content in #topic

    document.body.style.color = 'black'
    topicContainer.style.display = 'flex';
    topicContainer.style.flexDirection= 'column'
    topicContainer.style.alignItems= 'center'
    topicContainer.style.width = '60vw';
    topicContainer.style.margin = 'auto'


    // Create new content
    const newH2 = document.createElement('h2');
    newH2.textContent = `${story.querySelector('h2').textContent}`;
    newH2.style.fontSize = '40px'

    const newP = document.createElement('p');
    newP.textContent = `${story.querySelector('p').textContent}.`;
    newP.style.fontSize = '22px'
    newP.style.color = 'grey'
  

    // Create an image based on the articleId
    const newImage = document.createElement('img');
    newImage.src = imageMapping[articleId]; 
    newImage.alt = `An image for article `;

    newImage.width = '600';
    newImage.height = '400';
    newImage.style.margin = '20px'

    const newLink = document.createElement('p');
    newLink.textContent = newArticle[articleId];
    newLink.style.fontSize = '18px';
    newLink.style.textIndent = '60px'
    newLink.style.lineHeight = '25px'
    newLink.style.fontFamily = 'Arial, Helvetica, sans-serif'

    // Append the new content to the page
    topicContainer.appendChild(newH2);
    topicContainer.appendChild(newP);
    topicContainer.appendChild(newImage);
    topicContainer.appendChild(newLink);
  });
});




const list1 = document.querySelectorAll('li');

list1.forEach(btn => {
  btn.addEventListener('click',()=>{

    console.log(btn.id)

    document.getElementById('topic').innerHTML = '';

    if(btn.id === '1'){
    document.getElementById('newPost').classList.remove('hidden');
    document.getElementById('drafts').classList.add('hidden')
    document.getElementById('ideas').classList.add('hidden')
    }

    else if(btn.id === '2'){
    document.getElementById('drafts').classList.remove('hidden');
    document.getElementById('newPost').classList.add('hidden');
    document.getElementById('ideas').classList.add('hidden')
    }
    else{
    document.getElementById('ideas').classList.remove('hidden');
    document.getElementById('newPost').classList.add('hidden');
    document.getElementById('drafts').classList.add('hidden')
    }
  })
})

// Function to open the modal and display either the login or signup form
function openModal(formType) {
  document.getElementById('modal').style.display = 'block';

  if (formType === 'login') {
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('signupForm').style.display = 'none';
  } else if (formType === 'signup') {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('signupForm').style.display = 'block';
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Show the Sign Up form and hide the Login form
function showSignup() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
}

// Show the Login form and hide the Sign Up form
function showLogin() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
  var modal = document.getElementById('modal');
  if (event.target == modal) {
      closeModal();
  }
}





// Format text functions for the editor
function formatText(command) {
  document.execCommand(command, false, null);

}

// Insert bullet point for the editor
function insertBullet() {
  document.execCommand('insertUnorderedList', false, null);
}

// Save Draft Functionality

let drafts = [];

function saveDraft() {
  

  const editorContent = document.getElementById('editor').innerHTML;
  if (editorContent.trim() === '' || editorContent === '<div><br></div>') {
      alert('Please write something before saving a draft.');
      return;
  }

  drafts.push(editorContent);
  renderDrafts();
  alert('Draft saved!');
  document.getElementById('editor').innerHTML = ''; // Clear editor
}

function renderDrafts() {
  const draftList = document.getElementById('draftList');
  draftList.innerHTML = '';

  drafts.forEach((draft, index) => {
      const li = document.createElement('li');
      li.innerHTML = `Draft ${index + 1}: <span onclick="viewDraft(${index})">View</span>`;
      draftList.appendChild(li);
  });
}

function viewDraft(index) {
  const editor = document.getElementById('editor');
  editor.innerHTML = drafts[index];
}

// Idea Jotting Tool
let ideas = [];

function saveIdea() {
  const ideaBox = document.getElementById('ideaBox');
  const ideaContent = ideaBox.value.trim();

  if (ideaContent) {
      ideas.push(ideaContent);
      renderIdeas();
      ideaBox.value = ''; // Clear idea box
  } else {
      alert('Please write an idea before saving.');
  }
}

function renderIdeas() {
  const ideaList = document.getElementById('ideaList');
  ideaList.innerHTML = '';

  ideas.forEach((idea, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${idea} <span onclick="deleteIdea(${index})">Delete</span>`;
      ideaList.appendChild(li);
  });
}

function deleteIdea(index) {
  ideas.splice(index, 1);
  renderIdeas();
}
