from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS
app=Flask(__name__)
CORS(app)

app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='Govind@mysql1'
app.config['MYSQL_DB']='flaskproject'

mysql=MySQL(app)


@app.get('/pro')
def get_pro():
    cur=mysql.connection.cursor()
    cur.execute('SELECT * FROM userdetails')
    fetchdata=cur.fetchall()
    cur.close()
    return {'goin':'hello world','dt':fetchdata}