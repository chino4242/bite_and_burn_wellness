document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('submit');

    button.addEventListener('click', function(event) {
        event.preventDefault();

        const hoursSlept = parseFloat(document.getElementById('hoursSlept').value); 
        const carbs = parseFloat(document.getElementById('carbs').value);
        const protein = parseFloat(document.getElementById('protein').value);
        const fat = parseFloat(document.getElementById('fat').value);
        const calories = parseFloat(document.getElementById('calories').value);
        let totalCalories = 0;
        const steps = parseFloat(document.getElementById('steps').value);
        const workout = parseFloat(document.getElementById('workout').value);
        const mood = parseFloat(document.getElementById('mood').value);
        
        //Takes Macros and returns a calculated calorie amount
        function calculateCalories (carbs, protein, fat) {
            carbCalories = carbs * 4
            proteinCalories = protein * 4
            fatCalories = fat * 9
            totalCalories = carbCalories + proteinCalories + fatCalories
            return totalCalories
        }
        totalCalories = calculateCalories(carbs, protein, fat)
        // Combine the outputs into a single string
        document.getElementById('output').innerHTML = `
            Hours Slept: ${hoursSlept}<br>
            Carbs: ${carbs}<br>
            Protein: ${protein}<br>
            Fat: ${fat}<br>
            Calories: ${totalCalories}<br>
            Steps: ${steps}<br>
            Workout: ${workout}<br>
            Mood: ${mood}
        `;
    });


});

