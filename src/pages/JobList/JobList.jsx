import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import CompanyHeader from './CompanyListHeader.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import AddIcon from '../../icons/IconAdd.jsx';
import Pagination from '../../components/Paginantion/index.jsx';
import api from '../../utils/api.js';

const JobList = () => {
  const [jobList, setJobList] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [queryParams, setQueryParams] = useState({page: 1, search: ''});

  const getJobs = async (params) => {
    const {data} = await api(params).get('/jobs');

    return data.data;
  };

  useEffect(() => {
    getJobs(queryParams)
      .then((data) => {
        setIsLoading(true);
        setJobList(data.jobs);
        setTotalData(data.totalData);
      })
      .finally(() => setIsLoading(false));
  }, [queryParams]);

  const handleSearch = (search) => {
    setQueryParams((prev) => ({...prev, search}));
  };

  const handlePageChange = (page) => {
    setQueryParams((prev) => ({...prev, page}));
  };

  if (isLoading)
    return (
      <div className="grid place-content-center w-full h-full">Memuat...</div>
    );

  return (
    <div className="p-4 w-full rounded h-full shadow-primary bg-white">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mb-2 flex items-center">
          Daftar Lowongan
          <span className="ml-2">
            <Link to="/jobs/create" replace>
              <AddIcon />{' '}
            </Link>
          </span>
        </h1>
      </div>
      <SearchBar setSearchQuery={handleSearch} />
      <div className="h-[450px] overflow-y-auto pr-4">
        {jobList.length ? (
          jobList.map((job) => (
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
          ))
        ) : (
          <div className="text-black grid place-content-center h-full">
            Tidak ada lowongan
          </div>
        )}
      </div>
      <Pagination onPageChange={handlePageChange} totalData={totalData} />
    </div>
  );
};

export default JobList;
