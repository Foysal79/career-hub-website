import { BiCurrentLocation, BiDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite,location,job_type, salary} = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure className="p-4"><img className="w-40" src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="btn bg-white border-2 border-[#7E90FE] font-bold text-[#7E90FE] mr-4">{remote_or_onsite}</button>
        <button className="btn bg-white border-2 border-[#7E90FE] font-bold text-[#7E90FE]">{job_type}</button>
    </div>
    <div className="flex ">
        <div className="mr-10">
            <p className="flex"><span className="text-2xl"><BiCurrentLocation></BiCurrentLocation></span>{location}</p>
        </div>
        <div>
            <p className="flex"><span className="text-2xl"><BiDollarCircle></BiDollarCircle></span>{salary}</p>
        </div>
    </div>
      <Link to={`/job/${id}`}><button className="btn btn-primary bg-[#9890FF] text-white">View Details</button></Link>
    
  </div>
</div>
    );
};

export default Job;