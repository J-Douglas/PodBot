# Base Image
FROM node:12

# Create app directory
WORKDIR /app/frontend

#Install app dependencies
COPY ./client/package.json ./
COPY ./client/package-lock.json ./
RUN npm install
COPY ./client .

RUN npm start

FROM python:3

WORKDIR /app/backend

COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY ParlAI ./

RUN python3 ParlAI/parlai/chat_service/services/browser_chat/run.py --config-path ParlAI/parlai/chat_service/tasks/chatbot/config.yml
CMD python3 ParlAI/parlai/chat_service/services/browser_chat/client.py
