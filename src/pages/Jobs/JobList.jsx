import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import CompanyHeader from './CompanyListHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import AddIcon from '../../icons/IconAdd';
import Pagination from '../../components/Paginantion/index.jsx';
import api from '../../utils/api.js';

const JobList = () => {
  const [jobList, setJobList] = useState([]);
  const [totalData, setTotalData] = useState(0);

  const [queryParams, setQueryParams] = useState({page: 1, search: ''});

  const getJobs = async (params) => {
    const {data} = await api(params).get('/jobs');

    return data.data;
  };

  useEffect(() => {
    getJobs(queryParams).then((data) => {
      setJobList(data.jobs);
      setTotalData(data.totalData);
    });
  }, [queryParams]);

  const handleSearch = (search) => {
    setQueryParams((prev) => ({...prev, search}));
  };

  const handlePageChange = (page) => {
    setQueryParams((prev) => ({...prev, page}));
  };

  return (
    <div className="p-4 w-full h-full shadow-primary bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mb-2 flex items-center">
          Daftar Lowongan
          <span className="ml-2">
            <Link to="/createjobs">
              <AddIcon />{' '}
            </Link>
          </span>
        </h1>
      </div>
      <SearchBar setSearchQuery={handleSearch} />
      <div className="max-h-[450px] overflow-y-auto pr-4">
        {jobList.map((job) => (
          <div key={job.id} className="mb-4">
            <Link to={`/jobs/${job.id}`}>
              <CompanyHeader
                imageUrl={job.logo}
                jobTitle={job.title}
                category={job.city}
                businessSector={job.business_sector}
              />
            </Link>
          </div>
        ))}
      </div>
      <Pagination onPageChange={handlePageChange} totalData={totalData} />
    </div>
  );
};

export default JobList;
