// Example array of cards
const brainFirstAidCards = [
    { theme: "History", title: "Absurd", advice: "Find an absurd situation to differentiate the product or problem." },
    { theme: "Modify", title: "Reduce", advice: "What element of the product could you reduce in size or duration?ß" },
    { theme: "Ideas", title: "Unexpected Sources", advice: "Look outside your usual sources of inspiration. Watch a documentary, read a different genre, or talk to someone with a completely different background." },
    { theme: "Ideas", title: "Mix It Up", advice: "Take two unrelated ideas and try to combine them in an unexpected way. Can you create something new by merging them?" },
    { theme: "Focus", title: "Mindfulness", advice: "Take a moment to meditate or breathe deeply. Clear your mind before diving back into your work." },
    { theme: "Focus", title: "Limit Distractions", advice: "Set a timer for 30 minutes. During this time, turn off all notifications and focus solely on the task at hand." },
    { theme: "Collaboration", title: "Team Input", advice: "Ask for feedback from someone outside your usual creative circle. A fresh perspective can spark new ideas." },
    { theme: "Collaboration", title: "Role Reversal", advice: "Switch roles with a colleague. Let them be the creative lead while you provide support, or vice versa." },
    { theme: "Innovation", title: "Defy Expectations", advice: "Ask yourself: What’s the opposite of what everyone else would do? Try to go against the grain." },
    { theme: "Innovation", title: "Think Backwards", advice: "Start with the solution and work backwards to discover the problem you are solving." },
    { theme: "Conceptualization", title: "Simplify", advice: "Reduce your idea to its simplest form. Can it be understood in one sentence or less?" },
    { theme: "Conceptualization", title: "Elevator Pitch", advice: "If you had to explain your idea in 30 seconds to a stranger, how would you do it?" },
    { theme: "Risk-taking", title: "Embrace Failure", advice: "Don’t be afraid of failure. The best ideas often come after trying and failing several times." },
    { theme: "Risk-taking", title: "Take the Leap", advice: "Trust your instincts. Even if you’re unsure, sometimes you have to dive in and see what happens." },
    { theme: "Perspective", title: "See It from the Audience's Eyes", advice: "Imagine your idea from the perspective of your audience. Will it resonate with them?" },
    { theme: "Perspective", title: "Change Medium", advice: "Reframe your idea by changing the medium. Could it work better as a video, an article, or a meme?" },
    { theme: "Judgment", title: "Trust Your Gut", advice: "Sometimes your intuition knows best. Don’t overthink it." },
    { theme: "Judgment", title: "Test and Iterate", advice: "Prototype quickly and test your idea. Don’t wait for perfection." },
    { theme: "Time Management", title: "Set a Timer", advice: "Work in short bursts. Set a timer for 25 minutes, then take a 5-minute break." },
    { theme: "Time Management", title: "Prioritize", advice: "Focus on the most important task first, and don’t get distracted by smaller tasks." },
    { theme: "Inspiration", title: "Look to Nature", advice: "Nature is full of solutions to creative problems. Look at organic designs and structures for inspiration." },
    { theme: "Inspiration", title: "Look at Art", advice: "Visit a museum or explore online galleries to get inspired by different forms of art." },
    { theme: "Creativity", title: "Absurdity", advice: "Sometimes the most absurd ideas lead to the most innovative solutions. Don't filter yourself." },
    { theme: "Creativity", title: "Cross-disciplinary Thinking", advice: "Combine knowledge from different fields to solve your creative problem." },
    { theme: "Problem Solving", title: "Constraints are Opportunities", advice: "Instead of seeing limitations as a problem, view them as an opportunity to be more creative." },
    { theme: "Problem Solving", title: "Flip the Problem", advice: "Take your problem and try to flip it. What’s the opposite of your goal?" },
    { theme: "Out-of-the-box", title: "What If?", advice: "Ask 'What if?' to break free from conventional thinking. What would happen if you changed one small thing?" },
    { theme: "Out-of-the-box", title: "Go Wild", advice: "Let your imagination run wild. The more bizarre your idea, the closer you might be to a breakthrough." }
    // Add more objects as needed...
  ];


  
  
  // Function to display a random card
  function getRandomCard() {
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * brainFirstAidCards.length);
    const card = brainFirstAidCards[randomIndex];
    
    // Update the HTML elements with the card's data
    document.getElementById('theme').textContent = card.theme;
    document.getElementById('title').textContent = card.title;
    document.getElementById('advice').textContent = card.advice;
  }


  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.buttonIdea');  // Your button
    const card = document.querySelector('.card');         // The div you want to show

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        card.classList.remove('hidden');  // Add the 'show' class to make the card visible
    });
  });

  const currentYear = new Date().getFullYear();

// Find the element with id="year" and update its content
document.getElementById('year').textContent = currentYear;
  