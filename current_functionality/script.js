document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('submit');

    button.addEventListener('click', function (event) {
        event.preventDefault();

        const getInputValue = (id) => parseFloat(document.getElementById(id).value);
        
        const entry = {
            name: document.getElementById('name').value,
            sleep: { actual: getInputValue('hoursSlept') },
            carbs: { actual: getInputValue('carbs') },
            protein: { actual: getInputValue('protein') },
            fat: { actual: getInputValue('fat') },
            water: { actual: getInputValue('water') },
            steps: { actual: getInputValue('steps') },
            workout: { actual: getInputValue('workout') },
            mood: { actual: getInputValue('mood') },
        };

        const targetValues = {
            papo: {
                sleep: 7,
                carbs: 158,
                protein: 180,
                fat: 68,
                calories: 1964,
                water: 100,
                steps: 10000,
                workout: 45,
                mood: 8,
            },
            mala: {
                sleep: 7,
                carbs: 158,
                protein: 180,
                fat: 68,
                calories: 1964,
                water: 100,
                steps: 10000,
                workout: 45,
                mood: 8,
            }
        };

        const profile = targetValues[entry.name] || targetValues['mala']; // Defaulting to mala if name is not found

        // Calculate total calories
        const calculateCalories = (carbs, protein, fat) => (carbs * 4) + (protein * 4) + (fat * 9);
        
        const calories = calculateCalories(entry.carbs.actual, entry.protein.actual, entry.fat.actual);
        entry.calories = { actual: calories };

        // Evaluate and set targets
        const evaluateEntry = (entry, profile) => {
            for (const key in profile) {
                if (entry[key]) {
                    entry[key].target = profile[key];
                    entry[key].evaluation = evaluateValue(entry[key].actual, profile[key]);
                }
            }
        };

        const evaluateValue = (actual, target) => {
            const ratio = actual / target;
            if (ratio >= 0.9 && ratio <= 1.1) return "great";
            if (ratio >= 0.8 && ratio <= 1.2) return "good";
            if (ratio >= 0.7 && ratio <= 1.3) return "neutral";
            if (ratio >= 0.6 && ratio <= 1.4) return "bad";
            if (ratio >= 0.5 && ratio <= 1.5) return "very-bad";
            return "in-progress";
        };

        evaluateEntry(entry, profile);

        // Print and style data onto page
        const outputKeys = ['sleep', 'carbs', 'protein', 'fat', 'calories', 'water', 'steps', 'workout', 'mood'];
        outputKeys.forEach(key => {
            document.getElementById(`${key}_output`).innerHTML = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${entry[key].actual}`;
            document.getElementById(`${key}_output`).classList.add(entry[key].evaluation);
        });
    });
});
