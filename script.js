let text = "Hi. This is winkele.";
let index = 0;
let interval;
let interval1;
let interval2;
let interval3;
let interval5;
let opacity1 = 0;
let opacity2 = 0;
let opacity3 = 0;
let opacity4 = 0;
let opacity5 = 0;
let draggableKey = document.getElementById('key');
let lock = document.getElementById('lock');
let message = document.getElementById('message');
let coolTextGif = document.getElementById('coolTextGif');
let scrollDownTextFixed = document.getElementById('scrollDownTextFixed');
let container1 = document.getElementById('container1');
let dot = document.querySelector('dot');
let currentColorIndex = 0;
let scrollingDisabled = true;
const colors = ['#D3B5FA', '#C3B5FA', '#B5C4FA'];

const messages = [
  {
    text: "Hey! How's that website doing?",
    icon: '<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 11.5H15.51M11.5 11.5H11.51M7.5 11.5H7.51M15.3 19.1L21 21L19.1 15.3C19.1 15.3 20 14 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20C14.0847 20 15.3 19.1 15.3 19.1Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    name: "The guy.",
    align: 'left'
  },
  {
    text: "Hey. I'm working on it!",
    icon: '<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 11.5H15.51M11.5 11.5H11.51M7.5 11.5H7.51M15.3 19.1L21 21L19.1 15.3C19.1 15.3 20 14 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20C14.0847 20 15.3 19.1 15.3 19.1Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    name: "winkele (you)",
    align: 'right'
  },
  {
    text: "Is it cool enough?",
    icon: '<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 11.5H15.51M11.5 11.5H11.51M7.5 11.5H7.51M15.3 19.1L21 21L19.1 15.3C19.1 15.3 20 14 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20C14.0847 20 15.3 19.1 15.3 19.1Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    name: "The guy.",
    align: 'left'
  },
  {
    text: "Definitely.",
    icon: '<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 11.5H15.51M11.5 11.5H11.51M7.5 11.5H7.51M15.3 19.1L21 21L19.1 15.3C19.1 15.3 20 14 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20C14.0847 20 15.3 19.1 15.3 19.1Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    name: "winkele (you)",
    align: 'right'
  },
];

function type() {
  if (index < text.length) {
    document.getElementById('text').innerHTML += text.charAt(index);
    index++;
  } else {
    clearInterval(interval);
    setTimeout(() => {
      document.getElementById('scroll-text').innerHTML = "Scroll to see more.";
      interval1 = setInterval(fadeInScrollText, 50);
      scrollingDisabled = false;
      document.body.style.overflow = 'auto';
      let lockInitialLeft = lock.offsetLeft;
      let lockInitialTop = lock.offsetTop;
      lock.style.position = 'absolute'; 
      lock.style.left = lockInitialLeft + 'px';
      lock.style.top = lockInitialTop + 'px'; 
    }, 1000);
  }
}

function fadeInScrollText() {
  if (opacity1 < 0.7) {
    opacity1 += 0.05;
    document.getElementById('scroll-text').style.opacity = opacity1;
  } else {
    clearInterval(interval1);
  }
}

interval = setInterval(type, 105);

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

const viewportWidth = window.innerWidth;

// Check if the viewport is less than 800px wide
if (viewportWidth < 800) {
  // Do something if the view is not wide enough, like:
  console.log("View is not wide enough!");
  // Apply CSS styles to adjust elements
  document.getElementById('bouncing-dots').style.display = 'none'; // Hide element
  const oops = document.createElement("span");
  oops.textContent = 'Oops! Looks like the page is not wide enough. Widen your window or switch to a laptop.';
  oops.style.display = 'flex';
  oops.style.justifyContent = 'center';
  oops.style.alignItems = 'center';
  oops.style.opacity = '1';
  oops.style.color = 'white';
  oops.style.fontSize = '20px';

} else {
  // Do something if the view is wide enough
  console.log("View is wide enough!");
}

function showScrollText(){
  if (opacity3 < 0.7) {
    opacity3 += 0.05;
    scrollDownTextFixed.style.opacity = opacity3;
  } else {
    clearInterval(interval4);
  }
}

function showCoolText(){
  if (opacity2 < 0.7) {
    opacity2 += 0.05;
    message.style.opacity = opacity2;
    coolTextGif.style.opacity = opacity2;
    scrollDownTextFixed.style.opacity = opacity2;
  } else {
    clearInterval(interval3);
  }
}
function isOverlapping(rect1, rect2) {
  return (
    rect1.right > rect2.left &&
    rect1.left < rect2.right &&
    rect1.bottom > rect2.top &&
    rect1.top < rect2.bottom
  );
}


setInterval(changeBackgroundColor, 3000);
draggableKey.addEventListener('mousedown', (e) => {
  let isDragging = true;
  let offsetX = e.clientX - draggableKey.offsetLeft;
  let offsetY = e.clientY - draggableKey.offsetTop;
  draggableKey.style.position = 'absolute';

  document.addEventListener('mousemove', (moveEvent) => {
    if (isDragging) {
      draggableKey.style.left = moveEvent.clientX - offsetX + 'px';
      draggableKey.style.top = moveEvent.clientY - offsetY + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    const draggableKeyRect = draggableKey.getBoundingClientRect();
    const lockRect = lock.getBoundingClientRect();

    if (isOverlapping(draggableKeyRect, lockRect)) { 
      message.style.display = 'block';
      interval3 = setInterval(showCoolText, 20);
    }
  });
});

function animateMessage(index) {
  const conversation = document.getElementById('conversation');

  const messageDiv = document.createElement('div');
  messageDiv.style.display = 'flex';
  messageDiv.style.justifyContent = messages[index].align === 'left' ? 'flex-start' : 'flex-end';
  messageDiv.style.marginTop = '10vh';
  messageDiv.style.marginLeft = '2vh';

  const messageTextDiv = document.createElement('div');
  messageTextDiv.style.opacity = '0';
  messageTextDiv.style.transform = 'translateY(10px)';
  messageTextDiv.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  messageTextDiv.style.fontFamily = "'DM Sans', sans-serif";
  messageTextDiv.style.fontWeight = '500';
  messageTextDiv.style.color = '#FFFFFF';
  messageTextDiv.style.fontSize = '40px';
  messageTextDiv.textContent = messages[index].text;


  const iconAndNameDiv = document.createElement('div');
  iconAndNameDiv.style.display = 'flex';
  iconAndNameDiv.style.alignItems = 'center';
  iconAndNameDiv.style.opacity = '0';
  iconAndNameDiv.style.transform = 'translateY(10px)';
  iconAndNameDiv.style.transition = 'opacity 0.5s ease, transform 0.5s ease';


  const icon = document.createElement('div');
  icon.innerHTML = messages[index].icon;
  iconAndNameDiv.appendChild(icon);


  const name = document.createElement('p');
  name.textContent = messages[index].name;
  name.style.marginLeft = '10px';
  name.style.fontFamily = "'DM Sans', sans-serif";
  name.style.fontWeight = '400';
  name.style.color = '#e2e2e2';
  name.style.fontSize = '32px';
  iconAndNameDiv.appendChild(name);

  messageDiv.appendChild(messageTextDiv);
  messageDiv.appendChild(iconAndNameDiv);


  conversation.appendChild(messageDiv);


  setTimeout(() => {
    messageTextDiv.style.opacity = '1';
    messageTextDiv.style.transform = 'translateY(0)';
    iconAndNameDiv.style.opacity = '1';
    iconAndNameDiv.style.transform = 'translateY(0)';
  }, 500); 
}


function hideLoading(){
  document.querySelector(".loader-container").classList.add('hidden'); 
  setTimeout(() => { 
    document.querySelector(".loader-container").remove();
    const conversationDiv = document.createElement('div');
  conversationDiv.id = 'conversation';
  conversationDiv.style.display = 'flex';
  conversationDiv.style.flexDirection = 'column';
  conversationDiv.style.height = '100vh';
  conversationDiv.style.width = '50%';
  conversationDiv.style.opacity = '0';


  const disclaimerDiv = document.createElement('div');
  disclaimerDiv.id = 'conversationDisclaimer';
  disclaimerDiv.style.display = 'flex';
  disclaimerDiv.style.flexDirection = 'column';
  disclaimerDiv.style.height = '100vh';
  disclaimerDiv.style.width = '50%';
  disclaimerDiv.style.opacity = '0';
  


  const conversationMainScreen = document.getElementById('conversationMainScreen');
  conversationMainScreen.appendChild(conversationDiv);
  conversationMainScreen.appendChild(disclaimerDiv);
  let messageIndex = 0;
  const showNextMessage = () => {
    if (messageIndex < messages.length) {
      document.getElementById('conversation').style.opacity = '1';
      animateMessage(messageIndex);
      messageIndex++;
      
      setTimeout(showNextMessage, 2000);

    } else {
      animateDisclaimer();
    }
  };
  showNextMessage();
  }, 1000);
  
}

function animateDisclaimer() {
  const disclaimerDiv = document.getElementById('conversationDisclaimer');
  disclaimerDiv.style.opacity = 1;
  disclaimerDiv.style.display = 'flex';
  disclaimerDiv.style.flexDirection = 'column';
  disclaimerDiv.style.justifyContent = 'center';
  disclaimerDiv.style.alignItems = 'center';
  const disclaimerText1 = document.createElement('p');
  disclaimerText1.textContent = "This is not a real conversation.";
  disclaimerText1.style.opacity = '0';
  disclaimerText1.style.transition = 'opacity 0.5s ease'; 
  disclaimerText1.style.color = '#FFFFFF'; 
  disclaimerText1.style.fontFamily = "'DM Sans', sans-serif";
  disclaimerText1.style.fontWeight = '500';
  disclaimerText1.style.fontSize = '50px'; 

  const disclaimerText2 = document.createElement('p');
  disclaimerText2.textContent = "I hope everybody got that.";
  disclaimerText2.style.opacity = '0';
  disclaimerText2.style.color = '#FFFFFF';
  disclaimerText2.style.transition = 'opacity 0.5s ease';
  disclaimerText2.style.textAlign = 'center';
  disclaimerText2.style.fontFamily = "'DM Sans', sans-serif";
  disclaimerText2.style.fontWeight = '500';
  disclaimerText2.style.fontSize = '40px'; 

  disclaimerDiv.appendChild(disclaimerText1);
  disclaimerDiv.appendChild(disclaimerText2);

  setTimeout(() => {
    disclaimerText1.style.opacity = '1';
  }, 500); 

  setTimeout(() => {
    disclaimerText2.style.opacity = '1';
    createEndScreen();
  }, 1500); 
}

function isScrollTextVisible() {

  return parseFloat(scrollDownTextFixed.style.opacity) > 0.01; 
}

function hideScrollText() {

  scrollDownTextFixed.style.opacity = '0'; 
}

draggableKey.addEventListener('touchstart', (e) => {
  let isDragging = true;
  let touch = e.touches[0];
  let offsetX = touch.clientX - draggableKey.offsetLeft;
  let offsetY = touch.clientY - draggableKey.offsetTop;
  draggableKey.style.position = 'absolute';

  document.addEventListener('touchmove', (moveEvent) => {
    if (isDragging) {
      touch = moveEvent.touches[0];
      draggableKey.style.left = touch.clientX - offsetX + 'px';
      draggableKey.style.top = touch.clientY - offsetY + 'px';
    }
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
    const draggableKeyRect = draggableKey.getBoundingClientRect();
    const lockRect = lock.getBoundingClientRect();

    if (isOverlapping(draggableKeyRect, lockRect)) { 
      message.style.display = 'block';
      interval3 = setInterval(showCoolText, 20);
    }
  });
});

window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;


  if (offset === height && isScrollTextVisible()) {
    console.log('At the bottom and scroll text is visible');
    hideScrollText();
    hideLoading();
  }
};

window.addEventListener('touchend', (event) => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = window.innerHeight;


  if (scrollTop + clientHeight >= scrollHeight && isScrollTextVisible()) { 
    console.log('At the bottom and scroll text is visible');
    hideScrollText();
    hideLoading(); 
  }
});

//function createEndScreen() {
//  const endScreenDiv = document.createElement('div');
//  container1.appendChild(endScreenDiv);
//  endScreenDiv.style.top = '0';
//  endScreenDiv.style.left = '0';
//  endScreenDiv.style.width = '100vw';
//  endScreenDiv.style.height = '100vh';
//  endScreenDiv.style.display = 'flex';
//  endScreenDiv.style.flexDirection = 'column';
//  endScreenDiv.style.justifyContent = 'center';
//  endScreenDiv.style.alignItems = 'center';
//
//  const prettyCoolText = document.createElement('p');
//  prettyCoolText.textContent = "Pretty cool, huh?";
//  prettyCoolText.style.color = 'white';
//  prettyCoolText.style.fontFamily = "'DM Sans', sans-serif";
//  prettyCoolText.style.fontSize = '80px';
//  prettyCoolText.style.fontWeight = '600';
//  const projectText = document.createElement('p');
//  projectText.textContent = "Your projects can be even cooler.";
//  projectText.style.color = 'white';
//  projectText.style.fontFamily = "'DM Sans', sans-serif";
//  projectText.style.fontSize = '50px';
//  projectText.style.fontWeight = '400';
//  const contactText = document.createElement('p');
//  contactText.textContent = "You can contact me at:";
//  contactText.style.color = 'white';
//  contactText.style.fontFamily = "'DM Sans', sans-serif";
//  contactText.style.fontSize = '32px';
//  contactText.style.fontWeight = '300';
//  const emailText = document.createElement('p');
//  emailText.textContent = "winkeleesbus@proton.me";
//  emailText.style.color = 'white';
//  emailText.style.fontFamily = "'DM Sans', sans-serif";
//  emailText.style.fontSize = '32px';
//  emailText.style.fontWeight = '300';
//  const codeText = document.createElement('p');
//  codeText.textContent = "I code in Java, JS, Python and C#.";
//  codeText.style.color = 'white';
//  codeText.style.fontFamily = "'DM Sans', sans-serif";
//  codeText.style.fontSize = '32px';
//  codeText.style.fontWeight = '400';
//  const thankYouText = document.createElement('p');
//  thankYouText.textContent = "Thank you for making it this far :)";
//  thankYouText.style.color = 'white';
//  thankYouText.style.fontFamily = "'DM Sans', sans-serif";
//  thankYouText.style.fontSize = '32px';
//
//  endScreenDiv.appendChild(prettyCoolText);
//  endScreenDiv.appendChild(projectText);
//  endScreenDiv.appendChild(contactText);
//  endScreenDiv.appendChild(emailText);
//  endScreenDiv.appendChild(codeText);
//  endScreenDiv.appendChild(thankYouText);
//
//  document.body.appendChild(endScreenDiv);
//}