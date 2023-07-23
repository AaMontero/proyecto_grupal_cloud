import axios from 'axios'

const insertarClientedesdeCliente =  (body1) =>{
    const data = axios.post(`http://localhost:8085/APIBudget/V1/clientes`, body1).then(r=>r.data); 
    return data 
}

export const insertarCliente = async (cliente) => {
    return await insertarClientedesdeCliente(cliente);
}
const insertarClientedesdeEmpleado = (body1) =>{
    const data = axios.post(`http://localhost:9090/APIBudget/V1/clientes/Empleado`, body1).then(r=>r.data); 
    return data 
}
const insertarPaciente = (body1) =>{
    console.log(body1); 
    const data = axios.post(`http://localhost:9090/pacientes`, body1).then(r=>r.data); 
    return data; 
}
export const insertarPacienteAsync = async (paciente) =>{
    return await insertarPaciente(paciente); 
}
export const insertarClienteE = async (cliente) => {
    return await insertarClientedesdeEmpleado(cliente); 
}

const buscarclienteCedula = (id) =>{
    const datos = axios.get(`http://localhost:8085/APIBudget/V1/clientes?cedula=${id}`).then(r=>r.data); 
    return datos
}
export const buscarCliente = async (cedula) =>{
    return await buscarclienteCedula(cedula); 
}

export const buscarPaciente = async (cedula) =>{
    return buscarPacienteCedula(cedula); 
}
const buscarPacienteCedula = (id) =>{
    const datos = axios.get(`http://localhost:9090/pacientes/${id}`).then(r=>r.data); 
    return datos; 
}
export const listarTodosPacientes = async () =>{
    return await buscarClientesTodos(); 
}

const buscarClientesTodos = () =>{
    const datos = axios.get(`http://localhost:9090/pacientes`).then(r=>r.data); 
    return datos; 
}
const cambiarTarjetaAxios = (cedula, tarjeta) =>{
    console.log("Entra a fachada")
    const datos = axios.put(`http://localhost:8085/APIBudget/V1/reservaciones?cedula=${cedula}&numTar=${tarjeta}`).then(r=>r.data)
}
export const cambiarTarjeta = async (cedula,tarjeta) =>{
    console.log("Entra a real")
    return cambiarTarjetaAxios(cedula,tarjeta)    
}


export default insertarCliente;buscarCliente;insertarClienteE; cambiarTarjeta;