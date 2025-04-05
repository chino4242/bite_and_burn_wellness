document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('submit');

    button.addEventListener('click', function(event) {
        event.preventDefault();

        const hoursSlept = document.getElementById('hoursSlept').value; 
        const carbs = document.getElementById('carbs').value;
        const protein = document.getElementById('protein').value;
        const fat = document.getElementById('fat').value;
        const calories = document.getElementById('calories').value;
        const steps = document.getElementById('steps').value;
        const workout = document.getElementById('workout').value;
        const mood = document.getElementById('mood').value;
        
        // Combine the outputs into a single string
        document.getElementById('output').innerHTML = `
            Hours Slept: ${hoursSlept}<br>
            Carbs: ${carbs}<br>
            Protein: ${protein}<br>
            Fat: ${fat}<br>
            Calories: ${calories}<br>
            Steps: ${steps}<br>
            Workout: ${workout}<br>
            Mood: ${mood}
        `;
    });
});

