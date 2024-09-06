# api/urls.py

from django.urls import path
from .views import CandlestickDataView, LineChartDataView, BarChartDataView, PieChartDataView

# Define URL patterns for the API endpoints
urlpatterns = [
    # Endpoint for Candlestick chart data
    path('candlestick-data/', CandlestickDataView.as_view(), name='candlestick_data'),
    
    # Endpoint for Line chart data
    path('line-chart-data/', LineChartDataView.as_view(), name='line_chart_data'),
    
    # Endpoint for Bar chart data
    path('bar-chart-data/', BarChartDataView.as_view(), name='bar_chart_data'),
    
    # Endpoint for Pie chart data
    path('pie-chart-data/', PieChartDataView.as_view(), name='pie_chart_data'),
]

# Explanation of approach:
# 1. Each path maps a URL to a specific view class.
# 2. We use the .as_view() method to convert class-based views to view functions.
# 3. Each path is given a name for easy reverse lookup in other parts of the application.

