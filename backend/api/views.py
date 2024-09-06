from rest_framework.views import APIView
from rest_framework.response import Response

class CandlestickDataView(APIView):
    def get(self, request):
        # Simulated data for a candlestick chart
        data = [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            {"x": "2023-01-03", "open": 40, "high": 50, "low": 35, "close": 45},
        ]
        return Response({"data": data})

class LineChartDataView(APIView):
    def get(self, request):
        # Simulated data for a line chart
        data = {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }
        return Response(data)

class BarChartDataView(APIView):
    def get(self, request):
        # Simulated data for a bar chart
        data = {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }
        return Response(data)

class PieChartDataView(APIView):
    def get(self, request):
        # Simulated data for a pie chart
        data = {
            "labels": ["Red", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }
        return Response(data)

# Explanation of approach:
# 1. We use Django Rest Framework's APIView as the base class for all views.
# 2. Each view corresponds to a specific type of chart data.
# 3. We implement the get method for each view to handle GET requests.
# 4. Data is currently hardcoded for demonstration, but in a real application,
#    this would typically be fetched from a database or external service.
# 5. We use DRF's Response class to return data in a format that can be easily
#    serialized to JSON.