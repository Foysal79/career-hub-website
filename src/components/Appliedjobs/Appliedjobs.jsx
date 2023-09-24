import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localStore";


const Appliedjobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);

    const handelJobsFilter = filter => {
        if(filter === "all" )
        {
            setDisplayJob(appliedJobs);
        }
        else if (filter === 'remote')
        {
            const remotejobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJob(remotejobs);
        }
        else if (filter === 'onsite')
        {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJob(onsiteJobs);
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if(storedJobIds.length > 0){

            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id) );
            setAppliedJobs(jobsApplied);
            setDisplayJob(jobsApplied);

        }
        
    }, [])
    return (
        <div>
            <h4>Appalled jobs{appliedJobs.length}</h4>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                 <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={()=>handelJobsFilter('all') }><a>ALL</a></li>
                <li onClick={()=>handelJobsFilter('remote') }><a>Remote</a></li>
                <li onClick={()=>handelJobsFilter('onsite') }><a>Onsite</a></li>
                </ul>
           </details>
            <ul>
                {
                    displayJob.map(job => <li key={job.id}> <span>{job.job_title}</span> </li>)
                }
            </ul>
        </div>
    );
};

export default Appliedjobs;