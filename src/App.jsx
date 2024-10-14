import React, {useState} from 'react';
import './App.css';

function App() {
    const [restingEnergy, setRestingEnergy] = useState(0);
    const [activityCalories, setActivityCalories] = useState(0);
    const [dietaryEnergy, setDietaryEnergy] = useState(0);
    const [calorieDeficit, setCalorieDeficit] = useState(0);
    const [message, setMessage] = useState('');
    const [adjustmentMessage, setAdjustmentMessage] = useState('');

    const calculateDeficit = () => {
        // Calculate total burned calories (resting + activity)
        const totalBurnedCalories = restingEnergy + activityCalories;

        // Calculate calorie deficit
        const deficit = totalBurnedCalories - dietaryEnergy;

        setCalorieDeficit(deficit);

        // Determine if deficit meets the 500-calorie goal
        if (deficit >= 500) {
            setMessage("You are in range of a 500 calorie deficit. Keep it up!");

            // If the deficit is much higher than 500, provide more feedback
            if (deficit > 500) {
                const extraDeficit = deficit - 500;
                const extraCarbs = Math.round(extraDeficit / 4); // Carbs have 4 calories per gram
                setAdjustmentMessage(`You have an extra deficit of ${extraDeficit} calories. You could eat an additional ${extraCarbs} grams of carbs if needed.`);
            } else {
                setAdjustmentMessage('');
            }
        } else {
            setMessage("You need to adjust your intake or activity to reach a 500 calorie deficit.");
            setAdjustmentMessage("Consider reducing your dietary energy intake or increasing physical activity to reach your deficit goal.");
        }
    };

    return (
        <div className="bg-zinc-900 container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4 text-zinc-200">Calorie Deficit Tracker</h1>

            <div className="mb-4">
                <label className="block text-zinc-300 mb-1">Average Resting Energy (calories):</label>
                <input
                    type="number"
                    className="w-full p-2 bg-zinc-800 border border-zinc-500 text-orange-500 rounded"
                    value={restingEnergy}
                    onChange={(e) => setRestingEnergy(Number(e.target.value))}
                />
            </div>

            <div className="mb-4">
                <label className="block text-zinc-300 mb-1">Average Activity (calories):</label>
                <input
                    type="number"
                    className="w-full p-2 bg-zinc-800 border border-zinc-500 text-orange-500 rounded"
                    value={activityCalories}
                    onChange={(e) => setActivityCalories(Number(e.target.value))}
                />
            </div>

            <div className="mb-4">
                <label className="block text-zinc-300 mb-1">Average Dietary Energy (calories):</label>
                <input
                    type="number"
                    className="w-full p-2 bg-zinc-800 border border-zinc-500 text-green-500 rounded"
                    value={dietaryEnergy}
                    onChange={(e) => setDietaryEnergy(Number(e.target.value))}
                />
            </div>

            <button
                className="w-50 bg-zinc-800 text-green-500 font-bold py-2 px-4 rounded border border-zinc-500"
                onClick={calculateDeficit}
            >
                Calculate Calorie Deficit
            </button>

            <div className="px-4 py-4 text-zinc-200 font-semibold">
                <ul className='list-disc'>
                    <li className="text-lg text-green-500">Calorie Deficit: {calorieDeficit} cal</li>
                    <p className="text-lg">{message}</p>
                    {adjustmentMessage && <p className="text-sm mt-2 text-fuchsia-500">{adjustmentMessage}</p>}
                </ul>
            </div>
        </div>
    );
}

export default App;
