import React, { useState } from 'react';

function Capture() {
    const [hoursSlept, setHoursSlept] = useState("");
    const [carbs, setCarbs] = useState("");
    const [protein, setProtein] = useState("");
    const [fat, setFat] = useState("");
    const [water, setWater] = useState("");
    const [steps, setSteps] = useState("");
    const [workout, setWorkout] = useState("");
    const [mood, setMood] = useState("");
    const [profile, setProfile] = useState("mala");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do whatever you want with the data, for example:
        const formData = {
            profile,
            hoursSlept,
            carbs,
            protein,
            fat,
            water,
            steps,
            workout,
            mood,
        };
        console.log(formData);
        
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-container bg-white p-4 rounded shadow-sm">
                        <h1>Daily Data Capture</h1>
                        <form id="dailyForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <select
                                    name="profile"
                                    className="form-control"
                                    id="name"
                                    required
                                    value={profile}
                                    onChange={(e) => setProfile(e.target.value)}
                                >
                                    <option value="mala">Mala</option>
                                    <option value="papo">Papo</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hoursSlept">Hours Slept:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="hoursSlept"
                                    required
                                    value={hoursSlept}
                                    onChange={(e) => setHoursSlept(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="carbs">Carbohydrates (g):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="carbs"
                                    required
                                    value={carbs}
                                    onChange={(e) => setCarbs(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="protein">Protein (g):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="protein"
                                    required
                                    value={protein}
                                    onChange={(e) => setProtein(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fat">Fat (g):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="fat"
                                    required
                                    value={fat}
                                    onChange={(e) => setFat(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="water">Water (oz):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="water"
                                    required
                                    value={water}
                                    onChange={(e) => setWater(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="steps">Steps:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="steps"
                                    required
                                    value={steps}
                                    onChange={(e) => setSteps(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="workout">Workout (minutes):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="workout"
                                    required
                                    value={workout}
                                    onChange={(e) => setWorkout(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mood">Mood/Mindset Rating (1-10):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="mood"
                                    min="1"
                                    max="10"
                                    required
                                    value={mood}
                                    onChange={(e) => setMood(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary bg-dark" id="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Capture;