import serial
import time
import json
import mysql.connector

conexion = mysql.connector.connect(
    host='localhost',
    port=3306,
    user='invernadero',
    password='Ju@nma0816',
    db='Invernadero'
)

board = serial.Serial('/dev/ttyUSB0', baudrate=9600, timeout=0.0)
while 1:
    info = board.readline()
    if info !=  '\n':
        try:
            data = json.loads(info)
            curs = conexion.cursor()
            #consulta sql
            query = ("INSERT INTO Datos(fecha,temp,hum,bombillo,valvula) values(now(),"+str(data['temperatura'])+","+str(data['humedad'])+","+str(data['bombilla'])+","+str(data['valvula'])+")")
            #ejecutamos la sql
            print(query)
            curs.execute(query)
            conexion.commit()
        except ValueError:
            print("Error")
    time.sleep(10)
                
