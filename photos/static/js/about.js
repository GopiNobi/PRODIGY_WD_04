document.getElementById('edu-button1').addEventListener('click', function() {
    document.getElementById('content1').style.display = 'block';
    document.getElementById('content2').style.display = 'none';
});

document.getElementById('edu-button2').addEventListener('click', function() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'block';
});
// Set the target counts
const targetClientCount = 10; // Change this to your desired end value for clients
const targetProjectCount = 10; // Change this to your desired end value for projects
const targetTemplateCount = 100; // Change this to your desired end value for templates
const increment = 1; // Increment by 1 at a time

const clientCounterElement = document.getElementById('clientCounter');
const projectCounterElement = document.getElementById('projectCounter');
const templateCounterElement = document.getElementById('templateCounter');

const animationDuration = 3000; // 3 seconds (adjust as needed)

const options = {
    threshold: 0.0, // Intersection threshold (0.0 means fully in the viewport)
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target); // Stop observing once animation starts
        }
    });
}, options);

observer.observe(clientCounterElement);

function startCounting() {
    let currentClientCount = 0;
    let currentProjectCount = 0;
    let currentTemplateCount = 0;

    const interval = setInterval(function() {
        if (currentClientCount <= targetClientCount) {
            currentClientCount += increment;
            clientCounterElement.textContent = currentClientCount;
        }

        if (currentProjectCount <= targetProjectCount) {
            currentProjectCount += increment;
            projectCounterElement.textContent = currentProjectCount;
        }

        if (currentTemplateCount <= targetTemplateCount) {
            currentTemplateCount += increment;
            templateCounterElement.textContent = currentTemplateCount;
        }

        if (currentClientCount >= targetClientCount && currentProjectCount >= targetProjectCount && currentTemplateCount >= targetTemplateCount) {
            clearInterval(interval); // Stop the counting animation when it reaches the target counts
            currentClientCount = targetClientCount;
            currentProjectCount = targetProjectCount;
            currentTemplateCount = targetTemplateCount;
        }
    }, animationDuration / (Math.max(targetClientCount, targetProjectCount, targetTemplateCount) * increment));
}

// slider/.////////////////////////////////
