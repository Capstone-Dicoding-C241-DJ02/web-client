const TabsSummarizedCV = () => {
  return (
    <div className="text-black space-y-4 p-4">
      <h5 className="text-body">[Nama Pelamar]</h5>
      <div className="space-x-3">
        <span>[Nomor Telepon]</span>
        <span>[Email]</span>
      </div>
      <div>
        <span>[Asal Instansi, Jenjang - Jurusan | Tahun]</span>
      </div>
      <div className="space-y-2">
        <h5>Pengalaman Bekerja</h5>
        <span className="block">[Job Title]</span>
        <span>[Nama Perusahaan], [Lokasi] | [Tahun]</span>
      </div>
      <div className="space-y-2">
        <h5>Skills</h5>
        <span className="mr-2">Skill1,</span>
        <span className="mr-2">Skill2,</span>
        <span className="mr-2">Skill3</span>
        <span className="mr-2">Skill4</span>
      </div>
    </div>
  );
};

export default TabsSummarizedCV;
