import { useEffect, useState } from "react";
import JobListings from "../components/JobListings";

const Home = () => {
  const [jobs, setJobs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try{
      const res = await fetch("/api/jobs");
      if (!res.ok) throw new Error("Could not fetch jobs");
      const data = await res.json();
      setJobs(data);
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };
  fetchJobs();
}, []);

  return (
    <div className="home">
    {error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
    {jobs && <JobListings jobs={jobs} />}
  </div>
);
}
export default Home;
