# Calorie Deficit Tracker (Diet Tracker)

A simple desktop application built with **Electron**, **React**, **Vite**, and **Tailwind CSS** that helps you track
your average weekly calorie deficit. The application lets you enter data such as your average resting energy, activity
calories, and dietary energy to calculate whether you are meeting your weekly calorie deficit goals. The goal is based
on a
500 calorie deficit. The app was designed to work alongside Apple Health app, to help you keep on top of your diet, and
have a little more granular control, if you happen to train a little harder, you can reward yourself with a few more
calories, while staying in your deficit.

## Features

- **Calorie Deficit Calculation**: Calculate your total calorie deficit based on your resting energy, activity calories,
  and dietary intake.
- **Feedback on Deficit**: Provides detailed feedback to help you determine if you are meeting the 500-calorie deficit
  goal or if adjustments are needed.
- **User-Friendly Interface**: Styled with Tailwind CSS, the app provides a clear, easy-to-use interface for tracking
  your progress.
- **Desktop Application**: Packaged with Electron, allowing cross-platform usage.

## Tech Stack

- **Electron**: Desktop application framework.
- **React**: JavaScript library for building the user interface.
- **Vite**: Fast build tool for hot-reloading during development.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation

To get started with the Calorie Deficit Tracker, follow these steps:

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/ryd3v/diet-tracker.git
   cd diet-tracker
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Start the Application in Development Mode**:

   ```sh
   npm run dev
   ```

   This will start both the Vite server for development and the Electron app.

4. **Build the Application**:

   To package the app for distribution:

   ```sh
   npm run build
   ```

## Usage

1. **Enter Your Weekly Averages**: Enter the average calories burned through resting energy, activity, and the calories
   consumed through dietary intake. These data points are named **Resting Energy**, **Activity**, and **Dietary Energy**
   respectively in the Health App. Select the week, to get the average.
2. **Calculate Deficit**: Click the "Calculate Calorie Deficit" button to see if you meet the 500-calorie deficit goal.
3. **Adjust Accordingly**: The app will provide you with suggestions on whether you can increase your intake or need to
   adjust your activity.

## Screenshots

![Calorie Deficit Tracker](screenshot.png)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, feel free to reach out via GitHub

