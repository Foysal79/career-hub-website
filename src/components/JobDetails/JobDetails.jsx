import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStore";


const JobDetails = () => {
   
    const {id} = useParams();
      const jobs = useLoaderData();
      const idInt = parseInt(id); 
      const job = jobs.find(job => job.id === idInt)
      const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('you have applied successfully');
      }
      
    return (
        <div>
            <h2 className="m-4 text-2xl font-bold">Job details of : {id} </h2>
            <div className="grid md:grid-cols-4 gap-4">
               <div className="border md:col-span-3 p-4">
                 
                 <h3> <span className="text-xl font-bold mb-3 ">Job Description:</span> <p>{job.job_description}</p></h3>
                 <h3> <span className="text-xl font-bold mb-3">Job Responsibility:</span> <p>{job.job_responsibility}</p></h3>
                 <h3> <span className="text-xl font-bold mb-3">Educational Requirements:</span> <p>{job.educational_requirements}</p></h3>
                 <h3> <span className="text-xl font-bold mb-3">Experiences:</span> <p>{job.experiences}</p></h3>

               </div>
               <div className="border md:col-span-1 p-4 ">
                
                <div className="bg-blue-100 p-4 ">
                <h2 className="text-2xl font-bold border-b-2 pb-4">Job Details</h2>
                <p> <span className="font-bold">Salary : </span> {job.salary}  (Per Month) </p>
                <p> <span className="font-bold">Job Title : </span> {job.job_title} </p>

                <h2 className="mt-4 mb-4 text-2xl font-bold border-b-2 pb-4">Contact Information</h2>
                <p> <span className="font-bold">Phone : </span> {job.contact_information.phone} </p>
                <p> <span className="font-bold">Email : </span> {job.contact_information.email} </p>
                <p> <span className="font-bold">Address : </span> {job.contact_information.address} </p>
                </div>

                <div className="p-4 ">
                  <Link> <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button> </Link>
                </div>


               </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;