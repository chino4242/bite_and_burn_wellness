import React from 'react';

function Output({data}) {
    if(!data){
        return null;
    }
    const capitalizedProfile = data.profile.charAt(0).toUpperCase() + data.profile.slice(1);
    const totalCalories = (data.fat * 9) + (data.carbs * 4) + (data.protein * 4)
    return (
        <div class="col-md-6">
                <div class="output-container bg-white p-4 rounded shadow-sm">
                    <h2>Daily Data Output</h2>
                    <ul>
                        <li>Profile: {capitalizedProfile}</li>
                        <li>Hours Slept: {data.hoursSlept}</li>
                        <li>Carbohydrates: {data.carbs}</li>
                        <li>Protein: {data.protein}</li>
                        <li>Total Calories: {totalCalories}</li>
                        <li>Fat: {data.fat}</li>
                        <li>Water (oz): {data.water}</li>
                        <li>Steps: {data.steps}</li>
                        <li>Workout (minutes): {data.workout}</li>
                        <li>Mood/Mindset Rating (1-10): {data.mood}</li>
                    </ul>
                </div>
            </div>
    )
}

export default Output;