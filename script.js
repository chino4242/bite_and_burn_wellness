document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('submit');

    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        
        const name = document.getElementById('name').value;
        const hoursSlept = parseFloat(document.getElementById('hoursSlept').value); 
        const carbs = parseFloat(document.getElementById('carbs').value);
        const protein = parseFloat(document.getElementById('protein').value);
        const fat = parseFloat(document.getElementById('fat').value);
        const calories = parseFloat(document.getElementById('calories').value);
        let totalCalories = 0;
        const steps = parseFloat(document.getElementById('steps').value);
        const workout = parseFloat(document.getElementById('workout').value);
        const mood = parseFloat(document.getElementById('mood').value);
        
        const entry = {
            "name": name,
            "sleep": {
                "actualSleep": hoursSlept,
                "targetSleep": "",
                "evaluationSleep": ""
            },
            "carbs": {
                "actualCarbs": carbs,
                "targetCarbs": "",
                "evaluationCarbs": ""
            },
            "protein": {
                "actualProtein": protein,
                "targetProtein": "",
                "evaluationProtein": ""
            },
            "fat": {
                "actualFat": fat,
                "targetFat": "",
                "evaluationProtein": ""
            },
            "calories": {
                "actualCalories": calculateCalories(carbs, protein, fat),
                "targetCalories": "",
                "evaluationCalories": ""
            },
            "steps": {
                "actualSteps": steps,
                "targetSteps": "",
                "evaluationSteps": ""
            },
            "workout": {
                "actualSteps": workout,
                "targetSteps": "",
                "evaluationSteps": ""
            },
            "mood": {
                "actualMood": mood,
                "targetMood": "",
                "evaluationMood": ""
            },
        }

        //Takes Macros and returns a calculated calorie amount
        function calculateCalories (carbs, protein, fat) {
            carbCalories = carbs * 4
            proteinCalories = protein * 4
            fatCalories = fat * 9
            totalCalories = carbCalories + proteinCalories + fatCalories
            return totalCalories
        }
        totalCalories = calculateCalories(carbs, protein, fat)
        profile_array = [
            name,
            hoursSlept,
            carbs,
            protein,
            fat,
            totalCalories,
            steps,
            workout,
            mood
        ]
        
        // Take an array of data from the day and evaluate it against targets. 
        function evaluateDate(profile_array) {
            // Checks name and then sets targets
            if (profile_array[0] === "Papo") {
                hoursSleptTarget = 6;
                carbsTarget = 158;
                proteinTarget = 180;
                fatTarget = 68;
                totalCaloriesTarget = 1964;
                stepsTarget = 10000;
                workoutTarget = 45;
                moodTarget = 8;

                //Loop through array and evaluate against targets. Starting at 1 to ignore name
                for (let i = 1; i <profile_array.length; i++) {

                }


            } else if (profile_array[0] === "Mala") {
                //Checks name and then sets targets
                hoursSleptTarget = 6;
                carbsTarget = 158;
                proteinTarget = 180;
                fatTarget = 68;
                totalCaloriesTarget = 1964;
                stepsTarget = 10000;
                workoutTarget = 45;
                moodTarget = 8;
            }
        }
        
        function evaluateValue(value, target) {
            if (value >= (.9 * target) && value <= (1.1 * target)) {
                return "great";
            } else if (value >= (.8 * target) && value <= (1.2 * target)) {
                return "good";
            } else if (value >= (.7 * target) && value <= (1.3 * target)) {
                return "neutral";
            } else if (value >= (.6 * target) && value <= (1.4 * target)) {
                return "bad";
            } else if (value >= (.5 * target) && value <= (1.5 * target)) {
                return "very-bad"
            }
        }

         // Combine the outputs into a single string.
         // Eventually I'd like to split this back out per item so we can apply the 
         // style for each
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

