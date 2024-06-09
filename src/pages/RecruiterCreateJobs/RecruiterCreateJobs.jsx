import { useState } from "react";
import InputText from "../../components/InputText/InputText";
import { Editor } from "react-simple-wysiwyg";
import IconUploadImgPerus from "../../icons/IconUploadImgPerus"; // Ensure this is the correct path to your image

const RecruiterCreateJobs = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [sector, setSector] = useState("");
  const [description, setDescription] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !location || !sector || !description || !profilePhoto) {
      alert("Mohon isi semua field dan upload gambar.");
      return;
    }
    alert("Lowongan berhasil ditambahkan.");
  };

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  return (
    <form
      className="p-8 w-full overflow-auto max-h-screen"
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
            className="block border-2 border-dashed h-[171px] border-gray-300 p-4 rounded cursor-pointer text-center"
          >
            {profilePhoto ? (
              profilePhoto.name
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
        <Editor
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          containerProps={{
            style: {
              height: 320,
              borderColor: "#2E3F50",
              borderWidth: "2px",
            },
          }}
          className="px-2 py-3 border-2 w-full border-primary-blue rounded"
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
  );
};

export default RecruiterCreateJobs;
