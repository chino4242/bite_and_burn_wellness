import React from 'react';

function Output() {
    return (
        <div class="col-md-6">
                <div class="output-container bg-white p-4 rounded shadow-sm">
                    <h1>Daily Data Output</h1>
                    <p id="output"></p>
                    <p id="sleep_output"></p>
                    <p id="carbs_output"></p>
                    <p id="protein_output"></p>
                    <p id="fat_output"></p>
                    <p id="calories_output"></p>
                    <p id="water_output"></p>
                    <p id="steps_output"></p>
                    <p id="workout_output"></p>
                    <p id="mood_output"></p>
                </div>
            </div>
    )
}

export default Output;