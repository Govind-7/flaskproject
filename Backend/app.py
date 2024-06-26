from flask import Flask,request,abort
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
    param1 = int(request.args.get('offset')) 
    # if request.args.get('offset') == None else 0
    print("offset",param1)
    try:
        cur=mysql.connection.cursor()    
        query='SELECT * FROM userdetails limit %s offset %s'
        cur.execute(query,(2,param1))
        fetchdata=cur.fetchall()
        cur.close()
        # print(fetchdata)
        return {'dt':fetchdata}

    
    except :
        print('db error')
        abort (500, 'Bad Request')

    
   

@app.post('/posting')
def posting_data():
    try:
        data=request.get_json()
        if (data.get('name')!="" and data.get('age')!="" and data.get('gender')!="" and data.get('text')!=""):
            ip=request.remote_addr
            cur=mysql.connection.cursor()
            query = 'INSERT INTO userdetails (name, age, gender, summery,ipaddress) VALUES (%s, %s, %s, %s,%s)'
            cur.execute(query, (data['name'], data['age'], data['gender'], data['text'],ip))
            mysql.connection.commit()  
            cur.close()

            return{'dt':'sucess'}
        else:
            abort (400, 'Bad Request')
        

    except:
        print('db errr')
        abort (500, 'DB error')
@app.get('/clientIp')
def clientIpaddress():
    try:
        ip=str(request.remote_addr)
        cur=mysql.connection.cursor()

        query='SELECT * FROM userdetails WHERE ipaddress=%s'
        cur.execute(query,(ip,))
        fetchdata=cur.fetchall()
        cur.close()
   
        if len(fetchdata)>0:
            return {'dt':False}
        return {'dt':True}
    except:
        abort (500, 'DB error')




