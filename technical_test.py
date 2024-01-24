from datetime import date


class Person:
    def __init__(self, born_date=None, genre=False, edad=0):
        self.born_date = born_date
        self.genre = genre
        self.edad = edad


class Empleado:
    def __init__(
        self, id=0, nombre="", cargo="", salario=0, fecha=None, edad=0, sexo=""
    ):
        self.id = id
        self.nombre = nombre
        self.cargo = cargo
        self.salario = salario
        self.fecha = fecha
        self.edad = edad
        self.sexo = sexo


class Departamento_comercial(Empleado):
    def __init__(self, venta, ciudad):
        super().__init__()
        self.venta = venta
        self.ciudad = ciudad


class Gerencia(Empleado):
    def __init__(self, pais):
        super().__init__()
        self.pais = pais


import datetime


class Prueba_tecnica:
    def Prueba_tecnica(self):
        id = 97091918500
        fecha_nacimiento = self.obtener_fecha_de_nacimiento(id)
        if date is None:
            return
        edad = self.obtener_edad(fecha_nacimiento)
        sexo = "Masculino" if self.is_man_or_not(id) else "Femenino"

        print("La fecha es:", fecha_nacimiento)
        print("La edad es:", edad)
        print("El sexo es:", sexo)

    def get_empleado_test(self):
        empleado = self.obtener_empleado()
        print("Empleado:", empleado)

    def obtener_empleado(self):
        id = 97091918500
        date = self.obtener_fecha_de_nacimiento(id)
        if date is None:
            return None
        edad = self.obtener_edad(date)
        sexo = "Masculino" if self.is_man_or_not(id) else "Femenino"

        return {
            "id": 34547624768,
            "nombre": "Susan",
            "cargo": "Jefa de Ventas",
            "salario": 3000,
            "fecha": date,
            "edad": edad,
            "sexo": sexo,
        }

    def obtener_salario_total(self, salario, bonos=0):
        return salario + bonos

    def obtener_edad(self, fecha_nacimiento):
        return date.today().year - fecha_nacimiento.year

    def is_man_or_not(self, id):
        digitTen = int(str(id)[10])
        return digitTen % 2 == 1

    def obtener_fecha_de_nacimiento(self, id):
        if len(str(id)) != 11:
            return self.mensaje_de_error()

        carnet = str(id)

        year = int(carnet[0:2])
        month = int(carnet[2:4])
        day = int(carnet[4:6])

        if month > 12 or month < 0:
            return self.mensaje_de_error()
        if day < 0 or day > 31:
            return self.mensaje_de_error()

        if year <= 99:
            year = 1900 + year

        return datetime.date(year, month, day)

    def mensaje_de_error(self):
        print("Error: Número de identidad incorrecto")
        return None


test = Prueba_tecnica()
test.Prueba_tecnica()
test.get_empleado_test()
