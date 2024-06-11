import {useState} from 'react';
import InputText from '../../components/InputText/InputText';
import IconUploadImgPerus from '../../icons/IconUploadImgPerus';
import {useLocation, useNavigate} from 'react-router-dom';
import DescEditor from './DescEditor';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {toast} from 'react-toastify';

const RecruiterCreateJobs = () => {
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [sector, setSector] = useState('');
  const [description, setDescription] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profilePhoto) {
      toast.error('Mohon isi logo perusahaan', {
        hideProgressBar: true,
        className: 'border border-danger text-danger',
        style: {background: 'rgb(254, 202, 202)'},
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('city', city);
      formData.append('desc', description);
      formData.append('logo', profilePhoto);
      formData.append('business_sector', sector);

      await axiosPrivate.post('/jobs', formData);

      toast.success('Berhasil menambahkan pekerjaan', {
        hideProgressBar: true,
        className: 'border border-success text-success',
        style: {background: 'rgb(220, 252, 231)'},
      });
      navigate('/jobs', {replace: true});
    } catch (error) {
      if (error.response.status === 403) {
        navigate('/login', {state: {from: location}, replace: true});
      }
      toast.error(error.response.data.message, {
        hideProgressBar: true,
        className: 'border border-danger text-danger',
        style: {background: 'rgb(254, 202, 202)'},
      });
    }
  };

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setPreview(url);
  };

  return (
    <>
      <form
        className="p-8 w-full overflow-auto h-full bg-white shadow-primary"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl mb-4">Buat Lowongan</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex items-center justify-center md:col-span-1 lg:mr-5">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="profile-photo"
            />
            <label
              htmlFor="profile-photo"
              className="block overflow-clip border-2 border-dashed w-full h-[171px] border-gray-300  p-1 rounded cursor-pointer text-center"
            >
              {profilePhoto ? (
                <img
                  src={preview}
                  alt="preview"
                  className="h-full w-full object-cover rounded"
                />
              ) : (
                <div className="flex items-center justify-center">
                  <IconUploadImgPerus />
                  <span>Masukkan Foto Profile Perusahaan Max. 2MB .png</span>
                </div>
              )}
            </label>
          </div>
          <div className="md:col-span-2">
            <div className="mb-8 mt-2">
              <InputText
                id="title"
                type="text"
                label="Title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              <div className="mb-4">
                <InputText
                  id="location"
                  type="text"
                  label="Lokasi"
                  placeholder="Lokasi"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <InputText
                  id="sector"
                  type="text"
                  label="Sektor Bisnis"
                  placeholder="Sektor Bisnis"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 relative">
          <label className="absolute bg-white px-2 -top-3 left-3">
            Deskripsi Pekerjaan
          </label>
          <DescEditor
            onChange={(value) => setDescription(value)}
            value={description}
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-primary-blue text-white rounded"
          >
            Tambah Lowongan
          </button>
        </div>
      </form>
    </>
  );
};

export default RecruiterCreateJobs;
