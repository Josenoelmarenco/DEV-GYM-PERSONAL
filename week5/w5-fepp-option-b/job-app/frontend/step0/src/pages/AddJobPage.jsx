import { useState } from "react";
import {useNavigate} from "react-router-dom";

const AddJobPage = () => {
  // Estados, quiero controlar lo que el usuario escribe
  // son estados de Input
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState(0);

  const navigate = useNavigate();

  const submitForm = async (e) => { //Aquí el usuario dispara un evento
    // 1. Evita que la página se recargue (el comportamiento por defecto de los formularios en HTML)
    e.preventDefault(); 
    
    // 2. Construye un objeto "limpio" con toda la información que el usuario escribió en los inputs
    const newJob = {
      title,
      type,
      description,
      company: {
        name: companyName,
        contactEmail: email,
        contactPhone,
      },
      location,
      salary: Number(salary), // Convierte el salario a número por si acaso es un texto
    };

    // 3. Le entrega este objeto al "mensajero" (la función addJob) y espera a que termine (await)
    const createdJob = await addJob(newJob);
    
    // 4. Si el mensajero tuvo éxito y devolvió los datos del trabajo creado, redirige al usuario a la página principal ("/")
    if (createdJob) {
      navigate("/");
    }
  };


  return (
    <div className="create">
      <h2>Add a New Job</h2>
      <form onSubmit={submitForm}>
        <label>Job title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Job type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>

        <label>Job Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
        ></textarea>
        <label>Company Name:</label>
        <input
          type="text"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label>Contact Email:</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Contact Phone:</label>
        <input
          type="text"
          required
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
        />
        <label>Location:</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Salary:</label>
        <input
          type="number"
          required
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button onClick={() => submitForm()}>Add Job</button>
      </form>
    </div>
  );
};

const addJob = async (newJob) => {
  try {
    // 1. Usa fetch para hacer una llamada HTTP a tu servidor (a la ruta '/api/jobs')
    const res = await fetch('/api/jobs', {
      method: 'POST', // Indica que queremos CREAR datos nuevos (no solo leerlos)
      headers: { 'Content-Type': 'application/json' }, // Le avisa al servidor: "Oye, te voy a enviar datos en formato JSON"
      body: JSON.stringify(newJob), // Convierte el objeto de Javascript en un texto JSON para que viaje por internet
    });

    // 2. Revisa si el servidor respondió con un error (ej. error 404 o 500)
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to add job: ${errorText}`); // Si hay error, "lanza" una alarma para ir al 'catch'
    }

    // 3. Si todo salió bien, convierte la respuesta del servidor (que viene en JSON) de vuelta a un objeto de Javascript y lo devuelve a `submitForm`.
    return await res.json();
    
  } catch (error) {
    // 4. Si ocurrió algún problema (se cayó el internet, el servidor dio error, etc.), captura el error para que tu app no colapse, lo muestra en la consola y devuelve "null".
    console.error(error);
    return null; 
  }
};


export default AddJobPage;
