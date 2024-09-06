# Blockhouse Project

## Description

This project is a dynamic charting application with a Next.js frontend and Django backend. It allows users to view various types of charts including bar charts, line charts, candlestick charts, and pie charts.


## Project Structure

### Frontend (Next.js)

Key files:
- `src\_components\BarChart.js`
- `src\_components\LineChart.js`
- `src\_components\CandlestickChart.js`
- `src\_components\PieChart.js`
- `src\pages\dashboard.js`

### Backend (Django)

Key files:
- `api\views.py`
- `api\urls.py`

## Setup and Installation

### Backend Setup

1. Navigate to the backend directory.
2. Install the required packages:
   ```sh
   pip install -r requirements.txt
   ```
3. Run the Django server:
   ```sh
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory.
2. Install the required packages:
   ```sh
   npm install 
   ```
3. Run the Next.js development server:
   ```sh
   npm run dev
   ```

## Usage

1. Access the dashboard at: `http://localhost:3000/dashboard`
2. Select different charts to view dynamic visualizations.

## API

The backend API can be accessed at: `http://localhost:8000/api/candlestick-data/`

## Development

When developing, keep in mind that the frontend is configured to access the API at:
```javascript
export const apiUrl = "http://localhost:3000/dashboard"
```
Ensure your backend is running and accessible at this URL.

## Docker

To run the entire application using Docker, follow these steps:

1. Ensure Docker Desktop is installed and running on your machine.

2. Navigate to the root folder of the project in your terminal.

3. Build and start the Docker containers using the following command:

   ```sh
   docker-compose up --build
   ```

   This command will build the Docker images for both the frontend and backend, and then start the containers.

4. Once the containers are up and running, you can access the application by opening a web browser and navigating to:

   ```
   http://localhost:3000/dashboard
   ```



