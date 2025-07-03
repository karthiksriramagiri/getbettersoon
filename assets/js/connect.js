// Fun Facts for Kids
const funFacts = [
    {
        text: "Your heart beats about 100,000 times every single day!",
        emoji: "💗"
    },
    {
        text: "You blink about 17,000 times per day - that's like doing a tiny workout with your eyelids!",
        emoji: "👁️"
    },
    {
        text: "Your body makes about 25 million new cells every second!",
        emoji: "🔬"
    },
    {
        text: "Kids grow faster in the spring than any other season!",
        emoji: "🌱"
    },
    {
        text: "Your bones are actually stronger than steel when comparing the same thickness!",
        emoji: "💪"
    },
    {
        text: "You have about 10,000 taste buds in your mouth!",
        emoji: "👅"
    },
    {
        text: "Your brain uses about 20% of your body's total energy - thinking is hard work!",
        emoji: "🧠"
    },
    {
        text: "You lose about 50-100 hairs every day, but don't worry - new ones grow back!",
        emoji: "💇"
    },
    {
        text: "Your fingernails grow about 4 times faster than your toenails!",
        emoji: "✋"
    },
    {
        text: "When you smile, you use between 5 and 53 facial muscles!",
        emoji: "😊"
    },
    {
        text: "Your stomach gets an entirely new lining every 3-4 days!",
        emoji: "🤰"
    },
    {
        text: "You are about 1% shorter at night than in the morning because gravity compresses your spine!",
        emoji: "📏"
    },
    {
        text: "Your ears never stop growing throughout your entire life!",
        emoji: "👂"
    },
    {
        text: "Kids have more taste buds than adults - that's why some foods taste super strong to you!",
        emoji: "😋"
    },
    {
        text: "Your body produces about 1.5 liters of saliva every day - that's like 6 cups!",
        emoji: "💧"
    },
    {
        text: "You breathe in and out about 23,000 times per day without even thinking about it!",
        emoji: "🫁"
    },
    {
        text: "Your liver can regenerate itself! It's like having a superhero organ!",
        emoji: "🦸"
    },
    {
        text: "The muscles that move your eyes are the fastest muscles in your body!",
        emoji: "👀"
    },
    {
        text: "You have the same number of bones in your neck as a giraffe - just 7!",
        emoji: "🦒"
    },
    {
        text: "Your blood travels about 12,000 miles through your body every day!",
        emoji: "🩸"
    }
];

// Fun Facts functionality
let factCounter = 0;
let usedFacts = [];

function getRandomFact() {
    // Reset if we've used all facts
    if (usedFacts.length === funFacts.length) {
        usedFacts = [];
    }
    
    // Get unused facts
    const availableFacts = funFacts.filter((_, index) => !usedFacts.includes(index));
    const randomIndex = Math.floor(Math.random() * availableFacts.length);
    const selectedFact = availableFacts[randomIndex];
    
    // Mark this fact as used
    const originalIndex = funFacts.indexOf(selectedFact);
    usedFacts.push(originalIndex);
    
    return selectedFact;
}

function displayNewFact() {
    const fact = getRandomFact();
    const factDisplay = document.getElementById('fun-fact-display');
    const factText = factDisplay.querySelector('.fun-fact-text');
    const factEmoji = factDisplay.querySelector('.fun-fact-emoji');
    const counter = document.getElementById('fact-counter');
    
    // Add animation
    factDisplay.style.transform = 'scale(0.95)';
    factDisplay.style.opacity = '0.7';
    
    setTimeout(() => {
        factText.textContent = fact.text;
        factEmoji.textContent = fact.emoji;
        factCounter++;
        counter.textContent = factCounter;
        
        // Animate back
        factDisplay.style.transform = 'scale(1)';
        factDisplay.style.opacity = '1';
    }, 200);
}

// Newsletter form handling
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.connect-btn');
    const successMessage = document.getElementById('newsletter-success');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Connecting...';
    
    // Simulate form submission
    setTimeout(() => {
        form.style.display = 'none';
        successMessage.style.display = 'block';
    }, 1000);
}

// Feedback form handling
function handleFeedbackSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.connect-btn');
    const successMessage = document.getElementById('feedback-success');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        form.style.display = 'none';
        successMessage.style.display = 'block';
    }, 1000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Fun facts button
    const newFactBtn = document.getElementById('new-fact-btn');
    if (newFactBtn) {
        newFactBtn.addEventListener('click', displayNewFact);
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Feedback form
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }
    
    // Load stored fact counter
    const storedCounter = localStorage.getItem('funFactCounter');
    if (storedCounter) {
        factCounter = parseInt(storedCounter);
        document.getElementById('fact-counter').textContent = factCounter;
    }
    
    // Save fact counter whenever it changes
    const originalDisplayNewFact = displayNewFact;
    displayNewFact = function() {
        originalDisplayNewFact();
        localStorage.setItem('funFactCounter', factCounter);
    };
}); 