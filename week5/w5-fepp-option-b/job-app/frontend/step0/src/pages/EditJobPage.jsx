import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditJobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch job");
        }

        const data = await res.json();
        setTitle(data.title);
        setType(data.type);
        setDescription(data.description);
        setCompanyName(data.company.name);
        setEmail(data.company.contactEmail);
        setContactPhone(data.company.contactPhone);
        setLocation(data.location);
        setSalary(data.salary);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    const updatedJob = {
      title,
      type,
      description,
      company: {
        name: companyName,
        contactEmail: email,
        contactPhone,
      },
      location,
      salary: Number(salary),
    };

    const success = await updateJob(id, updatedJob);
    if (success) {
      navigate(`/jobs/${id}`);
    }
  };

  if (loading) return <p>Loading job...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="create">
      <h2>Update Job</h2>
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
          type="email"
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

        <button type="submit">Update Job</button>
      </form>
    </div>
  );
};

const updateJob = async (id, updatedJob) => {
  try {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to update job: ${errorText}`);
    }

    return true;
  } catch (error) {
    console.error("Error updating job:", error);
    return false;
  }
};

export default EditJobPage;