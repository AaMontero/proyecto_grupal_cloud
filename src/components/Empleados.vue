<template>
  <img src="../assets/hospitalIcono.png" alt="Logo del hospital" class="small-image"/>
  <h2>Pacientes</h2>
  
  <h3 v-on:click="cambiarMostrarRegCliente">Registro de Pacientes</h3>
  <br />
  <div v-if="muestraRegClientes">
    <div id="registroDeClientesDiv" class="input-group">
      <form action="Register">
        <div class="input-group input-group-sm mb-3">
          <label class="input-group-text" for="Cedula"> Cedula: </label>
          <input
            class="form-control"
            id="Cedula"
            type="text"
            v-model="cedulaIngresar"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <label class="input-group-text" for="Nombre"> Nombre: </label>
          <input
            class="form-control"
            id="Nombre"
            type="text"
            v-model="nombreIngresar"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <label class="input-group-text" for="Apellido"> Apellido: </label>
          <input
            class="form-control"
            id="Apellido"
            type="text"
            v-model="apellidoIngresar"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <label class="input-group-text" for="FechaNacimiento">
            Fecha de Nacimiento:
          </label>
          <input
            class="form-control"
            id="FechaNacimiento"
            type="date"
            v-model="fechaNacIngresar"
          />
        </div>
        
        <div class="input-group input-group-sm mb-3">
          <label class="input-group-text" for="Genero"> Genero: </label>
          <select
            class="form-select form-select-sm"
            name="Genero"
            id="genero"
            v-model="generoIngresar"
          >
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>
        <div class="input-group input-group-sm mb-3">
          <label class="input-group-text" for="Direccion"> Dirección: </label>
          <input
            class="form-control"
            id="Dirección"
            type="text"
            v-model="direccionIngresar"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <label class="input-group-text" for="Telefono"> Telefono: </label>
          <input
            class="form-control"
            id="Telefono"
            type="text"
            v-model="telefonoIngresar"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <label class="input-group-text" for="numExpediente"> Num. Expediente: </label>
          <input
            class="form-control"
            id="numExpediente"
            type="text"
            v-model="numExpedienteIngresar"
          />
        </div>
        <div class="input-group input-group-sm mb-3">
          <label class="input-group-text" for="idHospitalario"> Id. Hospitalario: </label>
          <input
            class="form-control"
            id="idHospitalario"
            type="text"
            v-model="idHospitalarioIngresar"
          />
        </div>
      </form>
    </div>
    <button v-on:click="ingresarClienteE" class="btn btn-secondary btn-sm">
      Insertar Paciente
    </button>

    <h5 v-if="seRegistroC">El paciente se registro correctamente</h5>
  </div>
  <br />

  <h3 v-on:click="cambiarMostrarConsultaCliente">
    Consultar los datos de un paciente
  </h3>
  <br />
  <div v-if="muestraConsultaCliente">
    <div id="ConsultaDeClientes">
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Cedula"> Cedula Cliente: </label>
        <input
          class="form-control"
          id="Cedula"
          type="text"
          v-model="cedulaBuscarIngresar"
        />
        <button v-on:click="buscarCedula" class="btn btn-secondary btn-sm">
          Buscar Paciente
        </button>
      </div>
    </div>
    <div id="resultadoCliente" >
      <b-table
        class="
          table table-striped table-bordered table-fixed table-secondary
          align-middle
        "
      >
        <thead>
          <tr class="table-primary">
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Sexo</th>
            <th>Fecha Nacimiento</th>
            <th>Domicilio</th>
            <th>Telefono</th>
            <th>Num. Expediente</th>
            <th>Id Hospitalario</th>
          </tr>
        </thead>
        <tr>
          <td>{{ clienteEncontrado.cedula_pac }}</td>
          <td>{{ clienteEncontrado.nombre_pac }}</td>
          <td>{{ clienteEncontrado.apellido_paterno_pac }}</td>
          <td>{{ clienteEncontrado.apellido_materno_pac }}</td>
          <td>{{ clienteEncontrado.sexo_pac }}</td>
          <td>{{ clienteEncontrado.fecha_nac_pac }}</td>
          <td>{{ clienteEncontrado.domicilio_pac }}</td>
          <td>{{ clienteEncontrado.telefono_pac }}</td>
          <td>{{ clienteEncontrado.num_expediente_pac }}</td>
          <td>{{ clienteEncontrado.id_hospitalario_pac }}</td>
          
        </tr>
      </b-table>
      <h5 v-if="noSeEncontroC">
        No se encontro el cliente con cedula {{ cedulaBuscarIngresar }}
      </h5>
    </div>
  </div>
  <br />
  <h3 v-on:click="cambiarMostrarTodosPacientes">
    Consultar todos los pacientes
  </h3>
  <br>
  <div id="TablaLarga" v-if="muestraTodosClientes">
        <button v-on:click="buscarPacientesTodosAsync" class="btn btn-secondary btn-sm">
      Listar todos los pacientes
        </button>
        <br>
        <br>
    <b-table
      class="
        table table-striped table-bordered table-fixed table-secondary
        align-middle
      "
    >
    <thead>
        <tr class="table-primary">
          <th>Cedula</th>
          <th>Nombre</th>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
          <th>Sexo</th>
          <th>Fecha Nacimiento</th>
          <th>Domicilio</th>
          <th>Telefono</th>
          <th>Num. Expediente</th>
          <th>Id Hospitalario</th>
        </tr>

        <tr v-for="reporte in listaClientesTodos" :key="reporte.id_pac">
          <td>{{ reporte.cedula_pac }}</td>
          <td>{{ reporte.nombre_pac}}</td>
          <td>{{ reporte.apellido_paterno_pac}}</td>
          <td>{{ reporte.apellido_materno_pac }}</td>
          <td>{{ reporte.sexo_pac }}</td>
          <td>{{ reporte.fecha_nac_pac }}</td>
          <td>{{ reporte.domicilio_pac  }}</td>
          <td>{{ reporte.telefono_pac }}</td>
          <td>{{ reporte.num_expediente_pac }}</td>
          <td>{{ reporte.id_hospitalario_pac  }}</td>
          
        </tr>
      </thead>

  </b-table>

  </div>
<!--
  <h3 v-on:click="cambiarMostrarAuto">Registro de vehiculos</h3>
  <br />
  <div id="insertarAutoDiv" v-if="muestraAuto">
    <form action="register">
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Placa"> Placa: </label>
        <input
          class="form-control"
          id="Placa"
          type="text"
          v-model="placaIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Marca"> Marca: </label>
        <select
          class="form-select form-select-sm"
          v-model="marcaSeleccionada"
          v-on:change="llenarModelos"
        >
          <option value="0">Selecione la marca</option>
          <option value="1">Chevrolet</option>
          <option value="2">KIA</option>
          <option value="3">Hyundai</option>
          <option value="4">Toyota</option>
          <option value="5">Renault</option>
          <option value="6">Nissan</option>
          <option value="7">Volkswagen</option>
        </select>
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="Modelo"> Modelo: </label>
        <select class="form-select form-select-sm" v-model="modeloIngresar">
          <option value="0">Seleccione el Modelo</option>
          <option v-for="(modelo, index) in listaModelos" :key="index">
            {{ modelo }}
          </option>
        </select>
      </div>

      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="anioFab">
          Año de Fabricación:
        </label>
        <input
          class="form-control"
          id="anioFab"
          type="text"
          v-model="anioFabIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="paisFab"
          >Pais de fabricación:
        </label>
        <input
          class="form-control"
          id="paisFab"
          type="text"
          v-model="paisFabIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="cilindraje">Cilindraje: </label>
        <input
          class="form-control"
          id="cilindraje"
          type="text"
          v-model="cilindrajeIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="avaluo">Avaluo: </label>
        <input
          class="form-control"
          id="avaluo"
          type="text"
          v-model="avaluoIngresar"
        />
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="valorPorDia"
          >Valor por día:
        </label>
        <input
          class="form-control"
          id="valorPorDia"
          type="text"
          v-model="valorPorDiaIngresar"
        />
      </div>
    </form>
    <button v-on:click="insertarunVehiculo" class="btn btn-secondary btn-sm">
      Insertar Vehiculo
    </button>
    <h5 v-if="seInsertoVehiculo">Se insertó correctamente el vehiculo</h5>
  </div>
  <br />
  <h3 v-on:click="cambiarMostrarAutoBuscado">Buscar Vehículo</h3>
  <br />
  <div v-if="muestraVehiculoBuscado">
    <div id="buscarDiv">
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="PlacaBuscar">Placa: </label>
        <input
          class="form-control"
          id="valorPorDia"
          type="text"
          v-model="placaBuscarIngresar"
        /><button
          v-on:click="buscarVehicPorPlaca"
          class="btn btn-secondary btn-sm"
        >
          Buscar Vehículo
        </button>
      </div>
    </div>
    <div id="resultadoVehiculo">
      <b-table
        class="
          table table-striped table-bordered table-fixed table-secondary
          align-middle
        "
      >
        <thead>
          <tr class="table-primary">
            <th>Placa</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Año de fabricación</th>
            <th>Cilindraje</th>
            <th>Avalúo</th>
            <th>Valor por día</th>
          </tr>
        </thead>
        <tr>
          <th>{{ vehiculoEncontrado.placa }}</th>
          <th>{{ vehiculoEncontrado.modelo }}</th>
          <th>{{ vehiculoEncontrado.marca }}</th>
          <th>{{ vehiculoEncontrado.anio }}</th>
          <th>{{ vehiculoEncontrado.cilindraje }}</th>
          <th>{{ vehiculoEncontrado.avaluo }}</th>
          <th>{{ vehiculoEncontrado.valorPorDia }}</th>
        </tr>
      </b-table>
      <h5 v-if="noseEncontroPlaca">
        No se encontraron datos del vehiculo: {{ placaBuscarIngresar }}
      </h5>
    </div>
  </div>
  <br />
  <h3 v-on:click="cambiarMostrarReserva">Buscar Reserva</h3>
  <br>
  <div v-if="muestraReserva">
    <div id="buscarDiv">
      <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="ReservaBuscar">Reserva: </label>
        <input
          class="form-control"
          id="ReservaBuscar"
          type="text"
          v-model="reservaBuscarIngresar"
        /><button v-on:click="cambiarReserva" class="btn btn-secondary btn-sm">
          Cambiar Reserva
        </button>
      </div>
    </div>
    <div id="resultadoReservaDiv">
      <b-table
        class="
          table table-striped table-bordered table-fixed table-secondary
          align-middle
        "
      >
        <thead>
          <tr class="table-primary">
            <th>Placa</th>
            <th>Modelo</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Reservado por</th>
          </tr>
        </thead>
        <tr>
          <td>{{ reservaEncontrada.placa }}</td>
          <td>{{ reservaEncontrada.modelo }}</td>
          <td>{{ reservaEncontrada.estado }}</td>
          <td>{{ reservaEncontrada.fecha }}</td>
          <td>{{ reservaEncontrada.reservadoPor }}</td>
        </tr>
      </b-table>
      <h5 v-if="seCambioVehiculo">
        Se cambió el estado del vehículo y la reserva ha sido ejecutada
      </h5>
    </div>
  </div>
-->
</template>

<script>
import {buscarPaciente, insertarPacienteAsync, listarTodosPacientes } from "../helpers/clientes.js";
import {
  insertarVehiculo,
  cambia_modelos,
  buscarPlaca,
} from "../helpers/vehiculosjs.js";
import { cambiar } from "../helpers/reservas.js";
export default {
  data() {
    return {
      cedulaIngresar: "",
      nombreIngresar: "",
      apellidoIngresar: "",
      fechaNacIngresar: "",
      generoIngresar: "",
      pacienteInt: 0,
      direccionIngresar:"",
      cedulaBuscarIngresar: "",
      telefonoIngresar:"", 
      numExpedienteIngresar:"",
      idHospitalarioIngresar:"",  
      clienteEncontrado: {
        cedula_pac: "",
        nombre_pac: "",
        apellido_paterno_pac: "",
        apellido_materno_pac: "",
        sexo_pac: null,
        fecha_nac_pac: null,
        domicilio_pac: "",
        telefono_pac:"",
        num_expediente_pac:"",
        id_hospitalario_pac:""
      },
      listaClientesTodos: [],
      noSeEncontroPacientes: false, 
      reservaEncontrada: {
        placa: "",
        modelo: "",
        estado: "",
        fecha: "",
        reservadoPor: "",
      },
      placaIngresar: "",
      modeloIngresar: "",
      marcaIngresar: "",
      anioFabIngresar: "",
      paisFabIngresar: "",
      cilindrajeIngresar: "",
      avaluoIngresar: "",
      valorPorDiaIngresar: "",
      placaBuscarIngresar: "",
      reservaBuscarIngresar: "",
      valorPred: "",
      modeloSeleccionado: 0,
      marcaSeleccionada: 0,
      vehiculoEncontrado: {
        placa: "",
        modelo: "",
        marca: "",
        anio: "",
        cilindraje: "",
        avaluo: "",
        valorPorDia: "",
      },
      listaMarcas: [
        "Chevrolet",
        "KIA",
        "Hyundai",
        "Toyota",
        "Renault",
        "Nissan",
        "Volkswagen",
      ],
      listaModelos: [],
      seRegistroC: false,
      noSeEncontroC: false,
      seInsertoVehiculo: false,
      noseEncontroPlaca: false,
      seCambioVehiculo: false,
      muestraRegClientes: false,
      muestraConsultaCliente: false,
      muestraAuto: false,
      muestraTodosClientes: false, 
      muestraVehiculoBuscado: false,
      muestraReserva:false,
    };
  },
  methods: {
    async buscarPacientesTodosAsync(){
      var response = await listarTodosPacientes(); 
      if(response.length===0){
        this.noSeEncontroPacientes=true; 
      }
      console.log(response);
      this.listaClientesTodos = response;
    }, 

    async ingresarClienteE() {
      console.log("Ingresa al metodo Insertar")
      if(this.generoIngresar=="Masculino"){
        this.pacienteInt = 1; 
      }else{
        this.pacienteInt = 2; 
      }
      const paciente = {
        cedula_pac: this.cedulaIngresar,
        nombre_pac: this.nombreIngresar,
        apellido_paterno_pac: this.apellidoIngresar,
        apellido_materno_pac: this.apellidoIngresar,
        fecha_nac_pac: this.fechaNacIngresar,
        sexo_pac: this.pacienteInt,
        domicilio_pac: this.direccionIngresar,
        telefono_pac: this.telefonoIngresar,
        num_expediente_pac: this.numExpedienteIngresar,
        id_hospitalario_pac: this.idHospitalarioIngresar
      };
      const response = await insertarPacienteAsync(paciente);
      if (response != null) {
        this.seRegistroC = true;
      }
      this.cedulaIngresar = "";
      this.nombreIngresar = "";
      this.apellidoIngresar = "";
      this.fechaNacIngresar = null;
      this.generoIngresar = null;
      this.direccionIngresar = ""; 
      this.telefonoIngresar = ""; 
      this.numExpedienteIngresar = ""; 
      this.idHospitalarioIngresar =""; 
    },
    async insertarunVehiculo() {
      var marca = this.listaMarcas[this.marcaSeleccionada - 1];
      const vehiculo = {
        placa: this.placaIngresar,
        modelo: this.modeloIngresar,
        marca: marca,
        anio: this.anioFabIngresar,
        pais: this.paisFabIngresar,
        cilindraje: this.cilindrajeIngresar,
        avaluo: this.avaluoIngresar,
        valorPorDia: this.valorPorDiaIngresar,
      };
      var response = await insertarVehiculo(vehiculo);
      if (response != null) {
        this.seInsertoVehiculo = true;
      }
      this.placaIngresar = "";
      this.modeloIngresar = "";
      this.marcaIngresar = "";
      this.anioFabIngresar = "";
      this.paisFabIngresar = "";
      this.cilindrajeIngresar = "";
      this.avaluoIngresar = 0;
      this.valorPorDiaIngresar = 0;
    },
    async buscarCedula() {
      var response = await buscarPaciente(this.cedulaBuscarIngresar);
      if (response === "") {
        this.noSeEncontroC = true;
      }
      this.clienteEncontrado = response;
      console.log(this.clienteEncontrado); 
      this.cedulaBuscarIngresar = "";
    },
    llenarModelos() {
      console.log("Entra a llenar Modelos");
      this.listaModelos = cambia_modelos(this.marcaSeleccionada);
    },
    async buscarVehicPorPlaca() {
      var response = await buscarPlaca(this.placaBuscarIngresar);
      if (response === "") {
        this.noseEncontroPlaca = true;
      }
      this.vehiculoEncontrado = response;
    },
    async cambiarReserva() {
      console.log("Entra al metodo en VUE");
      var response = await cambiar(this.reservaBuscarIngresar);
      console.log(response);
      if (response != null) {
        this.seCambioVehiculo = true;
      }
      this.reservaEncontrada = response;
    },
    cambiarMostrarRegCliente() {
      if (this.muestraRegClientes) {
        console.log("Se esta imprimiendo algo");
        this.muestraRegClientes = false;
      } else {
        this.muestraRegClientes = true;
      }
    },
    cambiarMostrarConsultaCliente() {
      if (this.muestraConsultaCliente) {
        this.muestraConsultaCliente = false;
      } else {
        this.muestraConsultaCliente = true;
      }
    },
    cambiarMostrarTodosPacientes(){
      if (this.muestraTodosClientes) {
        this.muestraTodosClientes = false;
      } else {
        this.muestraTodosClientes = true;
      }
    },
    cambiarMostrarAuto() {
      if (this.muestraAuto) {
        this.muestraAuto = false;
      } else {
        this.muestraAuto = true;
      }
    },
    cambiarMostrarAutoBuscado() {
      if (this.muestraVehiculoBuscado) {
        this.muestraVehiculoBuscado = false;
      } else {
        this.muestraVehiculoBuscado = true;
      }
    },
    cambiarMostrarReserva() {
      if (this.muestraReserva) {
        this.muestraReserva = false;
      } else {
        this.muestraReserva = true;
      }
    },
  },
};
</script>

<style>
#ConsultaDeClientes {
  width: 400px;
  margin: auto;
}
.small-image {
  width: 150px; /* Establecer el ancho de la imagen */
  height: auto; /* Mantener la proporción de la imagen */
}
#insertarAutoDiv {
  width: 400px;
  margin: auto;
}
#buscarDiv {
  width: 400px;
  margin: auto;
}
</style>