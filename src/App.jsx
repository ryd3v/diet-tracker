import React, {useState} from 'react';
import './App.css';
import {BsFire} from "react-icons/bs";
import {GiShinyApple} from "react-icons/gi";

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
                setAdjustmentMessage(`You have an extra deficit of ${extraDeficit} calories. 
                You could eat an additional ${extraCarbs} grams of carbs if needed.`);
            } else {
                setAdjustmentMessage('');
            }
        } else {
            setMessage("You need to adjust your intake or activity to reach a 500 calorie deficit.");
            setAdjustmentMessage("Consider reducing your dietary energy intake or increasing physical activity to reach your deficit goal.");
        }
    };

    return (
        <div className="bg-zinc-900 container mx-auto px-6 mt-2">
            <h1 className="text-3xl font-bold text-left text-zinc-200">Diet Tracker</h1>
            <div className="py-6">
                <label className="flex flex-row text-zinc-300 mb-1 text-xl"><BsFire className='text-orange-500'
                                                                                    size={22}/><span className='pl-1'>Average Resting Energy
                    (calories):</span></label>
                <input
                    type="number"
                    className="w-full p-2 bg-zinc-800 border border-zinc-900 text-orange-500 rounded focus:outline-none"
                    value={restingEnergy}
                    onChange={(e) => setRestingEnergy(Number(e.target.value))}
                />
            </div>

            <div className="mb-4">
                <label className="flex flex-row text-zinc-300 mb-1 text-xl"><BsFire className='text-orange-500'
                                                                                    size={22}/><span className='pl-1'>Average Activity
                    (calories):</span></label>
                <input
                    type="number"
                    className="w-full p-2 bg-zinc-800 border border-zinc-900 text-orange-500 rounded focus:outline-none"
                    value={activityCalories}
                    onChange={(e) => setActivityCalories(Number(e.target.value))}
                />
            </div>

            <div className="mb-4">
                <label className="flex flex-row text-zinc-300 mb-1 text-xl"><GiShinyApple className='text-green-500'
                                                                                          size={22}/><span
                    className='pl-1'>Average Dietary Energy
                    (calories):</span></label>
                <input
                    type="number"
                    className="w-full p-2 bg-zinc-800 border border-zinc-900 text-green-500 rounded focus:outline-none"
                    value={dietaryEnergy}
                    onChange={(e) => setDietaryEnergy(Number(e.target.value))}
                />
            </div>

            <button
                className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
                onClick={calculateDeficit}
            >
                Calculate Deficit
            </button>

            <div className="px-2 py-4 text-zinc-200 font-semibold">
                <p className="text-lg text-zinc-200">Calorie Deficit: {calorieDeficit} cal</p>
                <p className="text-lg">{message}</p>
                {adjustmentMessage && <p className="text-sm mt-2 text-pink-500 max-w-lg">{adjustmentMessage}</p>}
            </div>
        </div>
    );
}

export default App;
