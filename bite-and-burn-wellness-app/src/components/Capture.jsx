import React from 'react';

function Capture() {
    return (
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-container bg-white p-4 rounded shadow-sm">
                        <h1>Daily Data Capture</h1>
                        <form id="dailyForm">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <select name="profile" class="form-control" id="name" required>
                                    <option value="mala">Mala</option>
                                    <option value="papo">Papo</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="hoursSlept">Hours Slept:</label>
                                <input type="number" class="form-control" id="hoursSlept" required />
                            </div>
                            <div class="form-group">
                                <label for="carbs">Carbohydrates (g):</label>
                                <input type="number" class="form-control" id="carbs" required />
                            </div>
                            <div class="form-group">
                                <label for="protein">Protein (g):</label>
                                <input type="number" class="form-control" id="protein" required />
                            </div>
                            <div class="form-group">
                                <label for="fat">Fat (g):</label>
                                <input type="number" class="form-control" id="fat" required />
                            </div>
                            <div class="form-group">
                                <label for="calories">Water (oz):</label>
                                <input type="number" class="form-control" id="water" required />
                            </div>
                            <div class="form-group">
                                <label for="steps">Steps:</label>
                                <input type="number" class="form-control" id="steps" required />
                            </div>
                            <div class="form-group">
                                <label for="workout">Workout (minutes):</label>
                                <input type="number" class="form-control" id="workout" required />
                            </div>
                            <div class="form-group">
                                <label for="mood">Mood/Mindset Rating (1-10):</label>
                                <input type="number" class="form-control" id="mood" min="1" max="10" required />
                            </div>
                            <button type="submit" class="btn btn-primary bg-dark" id="submit">Submit</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
                
    )
}

export default Capture;