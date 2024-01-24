class Person {
  constructor(born_date = null, genre = false, edad = 0) {
    this.born_date = born_date;
    this.genre = genre;
    this.edad = edad;
  }
}

class Empleado {
  constructor(
    id = 0,
    nombre = "",
    cargo = "",
    salario = 0,
    fecha = null,
    edad = 0,
    sexo = ""
  ) {
    this.id = id;
    this.nombre = nombre;
    this.cargo = cargo;
    this.salario = salario;
    this.fecha = fecha;
    this.edad = edad;
    this.sexo = sexo;
  }
}

class Departamento_comercial extends Empleado {
  constructor(venta, ciudad) {
    super();
    this.venta = venta;
    this.ciudad = ciudad;
  }
}

class Gerencia extends Empleado {
  constructor(pais) {
    super();
    this.pais = pais;
  }
}

class Prueba_tecnica {
  Prueba_tecnica() {
    const id = 97091918500;
    const fecha_nacimiento = this.obtener_fecha_de_nacimiento(id);
    if (fecha_nacimiento === null) {
      return;
    }
    const edad = this.obtener_edad(fecha_nacimiento);
    const sexo = this.is_man_or_not(id) ? "Masculino" : "Femenino";

    console.log("La fecha es:", fecha_nacimiento.toLocaleDateString());
    console.log("La edad es:", edad);
    console.log("El sexo es:", sexo);
  }

  get_empleado_test() {
    const empleado = this.obtener_empleado();
    console.log("Empleado:", empleado);
  }

  obtener_empleado() {
    const id = 97091918500;
    const date = this.obtener_fecha_de_nacimiento(id);
    if (date === null) {
      return null;
    }
    const edad = this.obtener_edad(date);
    const sexo = this.is_man_or_not(id) ? "Masculino" : "Femenino";

    return {
      id: 34547624768,
      nombre: "Susan",
      cargo: "Jefa de Ventas",
      salario: 3000,
      fecha: date,
      edad: edad,
      sexo: sexo,
    };
  }

  obtener_salario_total(salario, bonos = 0) {
    return salario + bonos;
  }

  obtener_edad(fecha_nacimiento) {
    const today = new Date();
    return today.getFullYear() - fecha_nacimiento.getFullYear();
  }

  is_man_or_not(id) {
    const digitTen = parseInt(id.toString().charAt(10));
    return digitTen % 2 === 1;
  }

  obtener_fecha_de_nacimiento(id) {
    if (id.toString().length !== 11) {
      return this.mensaje_de_error();
    }

    const carnet = id.toString();

    const year = parseInt(carnet.substring(0, 2));
    const month = parseInt(carnet.substring(2, 4));
    const day = parseInt(carnet.substring(4, 6));

    if (month > 12 || month < 0) {
      return this.mensaje_de_error();
    }
    if (day < 0 || day > 31) {
      return this.mensaje_de_error();
    }

    let fullYear = year;
    if (year <= 99) {
      fullYear = 1900 + year;
    }

    return new Date(fullYear, month - 1, day);
  }

  mensaje_de_error() {
    console.error("Número de identidad incorrecto");
    return null;
  }
}

const test = new Prueba_tecnica();
test.Prueba_tecnica();
test.get_empleado_test();
