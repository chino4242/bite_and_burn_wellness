document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('submit');

    button.addEventListener('click', function(event) {
        event.preventDefault();

        const hoursSlept = document.getElementById('hoursSlept').value; 
        
        document.getElementById('output').innerHTML = hoursSlept;
        document.getElementById('output').innerHTML = `Hours Slept: ${hoursSlept}`;

    });
});
