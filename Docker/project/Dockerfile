FROM python:3.11-slim as python-base

ENV LC_ALL=en_US.UTF-8 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    PYTHONIOENCODING=utf-8 \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PROD=True

RUN apt-get update -y \
    && apt-get install -y locales libgraphviz-dev \
    && apt-get install -y postgresql-client-13 libpq-dev \
    && apt-get install -y gcc g++ libffi-dev libgraphviz-dev \
    && apt-get install -y zlib1g poppler-utils libmagic-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && cd /usr/local/bin \
    && pip3 install --upgrade pi

# Install Poetry (Abitary app -> This folder is withtin docker)
RUN pip3 install poetry

# RUN mkdir /app
WORKDIR /app

#Copy into app folder
COPY poetry.lock pyproject.toml /app/


#Installing project dependecies

RUN poetry config virtualenvs.create false \
    && poetry run pip install -U setuptools==57.0.0
RUN poetry install --no-interaction --no-ansi

# Placed here so we don't trigger change that often
COPY . /app/

# Access Docker via  Port 8000
EXPOSE 8000

#RWhen starting container based on image, execute the default command specified in the Dockerfile
# CMD ["python","manage.py","runserver", "0.0.0.0:8000"]