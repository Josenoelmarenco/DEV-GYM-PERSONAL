import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const JobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Creamos estados, pero no de input
  // Son estados que reciben objetos del backend
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    //“cuando entre a esta página, o cambie el id, ve al backend y trae los datos correspondientes”
    const fetchJob = async () => { //aquí el componente se sincroniza con la API
      try {
        const res = await fetch(`/api/jobs/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch job");
        }

        const data = await res.json();
        setJob(data); //aquí guardamos el objeto que obtuvimos en el objeto JOB
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const onDeleteClick = async (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (!confirm) return;
    
    // Esperamos a que la función externa haga su trabajo
    await deleteJob(jobId);

    // Una vez que termina de borrar, redirigimos al home
    navigate("/");
  };

  if (loading) return <p>Loading job...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!job) return <p>Job not found</p>;

  return (
    <div className="job-preview">
      <h2>{job.title}</h2>
      <p>Type: {job.type}</p>
      <p>Description: {job.description}</p>
      <p>Company: {job.company.name}</p>
      <p>Email: {job.company.contactEmail}</p>
      <p>Phone: {job.company.contactPhone}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <button onClick={() => navigate("/")}>Back</button>
      <button onClick={() => onDeleteClick(job._id)}>Delete</button>
    </div>
  );
};

const deleteJob = async (jobId) => {
  try{
    const res = await fetch(`/api/jobs/${jobId}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete job");
  } catch (error){
    console.error("Error deleting job: ", error);
  }
};


export default JobPage;