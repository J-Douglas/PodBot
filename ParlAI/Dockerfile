FROM python:3.9.1-slim-buster

WORKDIR /app/backend

COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

RUN python setup.py develop
CMD python3 ./parlai/chat_service/services/browser_chat/client.py