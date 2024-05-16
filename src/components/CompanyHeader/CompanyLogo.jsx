import CompanyHeader from "./CompanyHeader";
import companyLogo from "../../assets/logo-company.png"; // Importing the image

const CompanyLogo = () => {
  return (
    <div className="p-4">
      <CompanyHeader
        imageUrl={companyLogo} // Passing the image URL as a prop
        jobTitle="ML Engineer"
        salary="1.000 - 100.000"
        category="Finance"
      />
    </div>
  );
};

export default CompanyLogo;
