# Use official lightweight Python image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all application files
COPY . .

# Set default environment variables
ENV PORT=8080
ENV FLASK_APP=app.py

# Expose the port Zeabur expects
EXPOSE 8080

# Run the application directly with Python
CMD ["python", "app.py"]
