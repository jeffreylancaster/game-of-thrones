# Game of Thrones Text Search

## To Run

```python
pip install flask
pip install flask-pymongo # for mongodb connection
pip install dnspython # for mongodb connection
pip install bson # for page/post
pip install python-dotenv # for environment variables
```

Or all in one:

```python
pip install flask flask-pymongo dnspython bson python-dotenv
```

And you'll need to export these variables in the Terminal:

```bash
export FLASK_APP=main.py
export FLASK_RUN_HOST=0.0.0.0
export FLASK_RUN_PORT=8080
export FLASK_DEBUG=1
export LC_ALL=C.UTF-8
export LANG=C.UTF-8
```

To view the finished app, execute `flask run` in the Terminal.
