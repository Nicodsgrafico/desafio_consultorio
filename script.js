//Funciones constructoras
function Consultorio(consultorio) {
    var _consultorio = consultorio;
    var _pacientes = [];

    Object.defineProperty(this, "_getConsultorio", {
        get: function () {
            return _consultorio;
        }
    });

    Object.defineProperty(this, "_setConsultorio", {
        set: function (consultorio) {
            _consultorio = consultorio;
        }
    });
    Object.defineProperty(this, "_getPacientes", {
        get: function () {
            return _pacientes;
        }
    });

    Object.defineProperty(this, "_setPacientes", {
        set: function (pacientes) {
            _pacientes = pacientes;
        }
    });
}
Consultorio.prototype.getConsultorio = function () {
    return this._getConsultorio;
}

Consultorio.prototype.setConsultorio = function (consultorio) {
    this._setConsultorio = consultorio;
}
Consultorio.prototype.getPacientes = function () {
    return this._getPacientes;
}

Consultorio.prototype.setPacientes = function (paciente) {
    this._setPacientes= paciente;
}

Consultorio.prototype.addPaciente = function(paciente){
    this.getPacientes().push(paciente);
}

Consultorio.prototype.findPaciente = function(nombre) {
    var pacientes = this.getPacientes();
    for (var i = 0; i < pacientes.length; i++) {
        if (pacientes[i].getNombre() === nombre) {
            var pacienteEncontrado = pacientes[i];
            // Imprimir todos los datos del paciente
            console.log("Datos del paciente:");
            console.log("Nombre:", pacienteEncontrado.getNombre());
            console.log("Edad:", pacienteEncontrado.getEdad());
            console.log("RUT:", pacienteEncontrado.getRut());
            console.log("Diagnóstico:", pacienteEncontrado.getDiagnostico());
            return pacienteEncontrado;
        }
    }
    console.log("No se encontró ningún paciente con el nombre dado.");
    return null;
}

Consultorio.prototype.mostrarDatosPacientes = function() {
    var pacientes = this.getPacientes();
    console.log("Datos de todos los pacientes registrados:");
    for (var i = 0; i < pacientes.length; i++) {
        console.log("Paciente", i + 1);
        console.log("Nombre:", pacientes[i].getNombre());
        console.log("Edad:", pacientes[i].getEdad());
        console.log("RUT:", pacientes[i].getRut());
        console.log("Diagnóstico:", pacientes[i].getDiagnostico());
        console.log("-----------------------------");
    }
}

function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    //defineProperty para los setters y getters
    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad;
        }
    });

    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            _edad = edad;
        }
    });

    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut;
        }
    });

    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            _rut = rut;
        }
    });

    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico;
        }
    });

    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    });
}

//Metodos para getters y setters
Paciente.prototype.getNombre = function () {
    return this._getNombre;
}

Paciente.prototype.setNombre = function (nombre) {
    this._setNombre = nombre;
}
Paciente.prototype.getEdad = function () {
    return this._getEdad;
}

Paciente.prototype.setEdad = function (edad) {
    this._setEdad = edad;
}

Paciente.prototype.getRut = function () {
    return this._getRut;
}

Paciente.prototype.setRut = function (rut) {
    this._setRut = rut;
}

Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico;
}

Paciente.prototype.setDiagnostico = function (diagnostico) {
    this._setDiagnostico = diagnostico;
}

//////////////////////////

let c1 = new Consultorio("Integramedica");
let c2 = new Consultorio("Consalud")
let p1 = new Paciente("Nicolas",25,"19.747.829-2","Resfriado");
let p2 = new Paciente("Isabel",26,"19.747.829-2","Resfriado");
let p3 = new Paciente("Gustavo",25,"19.747.829-2","Resfriado");
let p4 = new Paciente("Patricia",25,"19.747.829-2","Resfriado");
c1.addPaciente(p1)
c1.addPaciente(p2)
c1.addPaciente(p3)
c1.addPaciente(p4)
console.log(c1);