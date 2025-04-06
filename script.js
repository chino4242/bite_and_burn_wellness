document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('submit');

    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const hoursSlept = parseFloat(document.getElementById('hoursSlept').value); 
        const carbs = parseFloat(document.getElementById('carbs').value);
        const protein = parseFloat(document.getElementById('protein').value);
        const fat = parseFloat(document.getElementById('fat').value);
        const water = parseFloat(document.getElementById('water').value);
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
                "evaluationFat": ""
            },
            "calories": {
                "actualCalories": calculateCalories(carbs, protein, fat),
                "targetCalories": "",
                "evaluationCalories": ""
            },
            "water": {
                "actualWater": water,
                "targetWater": "",
                "evaluationWater": ""
            },
            "steps": {
                "actualSteps": steps,
                "targetSteps": "",
                "evaluationSteps": ""
            },
            "workout": {
                "actualWorkout": workout,
                "targetWorkout": "",
                "evaluationWorkout": ""
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
        
        // Take an array of data from the day and evaluate it against targets. 
        function evaluateDate(entry) {
            // Checks name and then sets targets
            if (entry.name === "papo") {
                entry.sleep.targetSleep = 7;
                entry.sleep.evaluationSleep = evaluateValue(entry.sleep.actualSleep, entry.sleep.targetSleep);
                entry.carbs.targetCarbs = 158;
                entry.carbs.evaluationCarbs = evaluateValue(entry.carbs.actualCarbs, entry.carbs.targetCarbs);
                entry.protein.targetProtein= 180;
                entry.protein.evaluationProtein= evaluateValue(entry.protein.actualProtein, entry.protein.targetProtein);
                entry.fat.targetFat = 68;
                entry.fat.evaluationFat = evaluateValue(entry.fat.actualFat,entry.fat.targetFat);
                entry.calories.targetCalories = 1964;
                entry.calories.evaluationCalories = evaluateValue(entry.calories.actualCalories, entry.calories.targetCalories);
                entry.water.targetWater = 100;
                entry.water.evaluationWater = evaluateValue(entry.water.actualWater, entry.water.targetWater);
                entry.steps.targetSteps = 10000;
                entry.steps.evaluationSteps = evaluateValue(entry.steps.actualSteps, entry.steps.targetSteps)
                entry.workout.targetWorkout = 45;
                entry.workout.evaluationWorkout = evaluateValue(entry.workout.actualWorkout,entry.workout.targetWorkout);
                entry.mood.targetMood = 8;
                entry.mood.evaluationMood = evaluateValue(entry.mood.actualMood, entry.mood.targetMood);

            } else if (profile_array[0] === "mala") {
                //Checks name and then sets targets
                entry.sleep.targetSleep = 7;
                entry.sleep.evaluationSleep = evaluateValue(entry.sleep.actualSleep, entry.sleep.targetSleep);
                entry.carbs.targetCarbs = 158;
                entry.carbs.evaluationCarbs = evaluateValue(entry.carbs.actualCarbs, entry.carbs.targetCarbs);
                entry.protein.targetProtein= 180;
                entry.protein.evaluationProtein= evaluateValue(entry.protein.actualProtein, entry.protein.targetProtein);
                entry.fat.targetFat = 68;
                entry.fat.evaluationFat = evaluateValue(entry.fat.actualFat,entry.fat.targetFat);
                entry.calories.targetCalories = 1964;
                entry.calories.evaluationCalories = evaluateValue(entry.calories.actualCalories, entry.calories.targetCalories);
                entry.water.targetWater = 100;
                entry.water.evaluationWater = evaluateValue(entry.water.actualWater, entry.water.targetWater);
                entry.steps.targetSteps = 10000;
                entry.steps.evaluationSteps = evaluateValue(entry.steps.actualSteps, entry.steps.targetSteps)
                entry.workout.targetWorkout = 45;
                entry.workout.evaluationWorkout = evaluateValue(entry.workout.actualWorkout,entry.workout.targetWorkout);
                entry.mood.targetMood = 8;
                entry.mood.evaluationMood = evaluateValue(entry.mood.actualMood, entry.mood.targetMood);
            }
        }
        
        function evaluateValue(actual, target) {
            if (actual >= (.9 * target) && actual <= (1.1 * target)) {
                return "great";
            } else if (actual >= (.8 * target) && actual <= (1.2 * target)) {
                return "good";
            } else if (actual >= (.7 * target) && actual <= (1.3 * target)) {
                return "neutral";
            } else if (actual >= (.6 * target) && actual <= (1.4 * target)) {
                return "bad";
            } else if (actual >= (.5 * target) && actual <= (1.5 * target)) {
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
        evaluateDate(entry)
        document.getElementById('sleep_output').innerHTML = `Hours Slept: ${entry.sleep.actualSleep}`;
        document.getElementById('sleep_output').classList.add(entry.sleep.evaluationSleep);
        document.getElementById('carbs_output').innerHTML = `Carbs: ${entry.carbs.actualCarbs}`;
        document.getElementById('carbs_output').classList.add(entry.carbs.evaluationCarbs);
        document.getElementById('protein_output').innerHTML = `Protein: ${entry.protein.actualProtein}`;
        document.getElementById('protein_output').classList.add(entry.protein.evaluationProtein);
        document.getElementById('fat_output').innerHTML = `Fat: ${entry.fat.actualFat}`;
        document.getElementById('fat_output').classList.add(entry.fat.evaluationFat);
        document.getElementById('calories_output').innerHTML = `Calories: ${entry.calories.actualCalories}`;
        document.getElementById('calories_output').classList.add(entry.calories.evaluationCalories);
        document.getElementById('water_output').innerHTML = `Water: ${entry.water.actualWater}`;
        document.getElementById('water_output').classList.add(entry.water.evaluationWater);
        document.getElementById('steps_output').innerHTML = `Steps: ${entry.steps.actualSteps}`;
        document.getElementById('steps_output').classList.add(entry.steps.evaluationSteps);
        document.getElementById('workout_output').innerHTML = `Workout: ${entry.workout.actualWorkout}`;
        document.getElementById('workout_output').classList.add(entry.workout.evaluationWorkout);
        document.getElementById('mood_output').innerHTML = `Mood: ${entry.mood.actualMood}`;
        document.getElementById('mood_output').classList.add(entry.mood.evaluationMood);
    });

});

