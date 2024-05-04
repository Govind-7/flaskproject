from flask import Flask,request
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
    ip=request.remote_addr
    print("customize -add",ip)
    cur.execute('SELECT * FROM userdetails')
    fetchdata=cur.fetchall()
    cur.close()
    return {'goin':'hello world','dt':fetchdata}

@app.post('/posting')
def posting_data():
    data=request.get_json()
    
    cur=mysql.connection.cursor()
    query = 'INSERT INTO userdetails (name, age, gender, summery) VALUES (%s, %s, %s, %s)'
    cur.execute(query, (data['name'], data['age'], data['gender'], data['text']))
    mysql.connection.commit()  
    cur.close()

    return{'dt':'sucess'}
