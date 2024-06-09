import CompanyHeader from "./CompanyHeader";
import companyLogo from "../../assets/logo-company.png";

const CompanyLogo = () => {
  return (
    <div className="p-4">
      <CompanyHeader
        imageUrl={companyLogo}
        jobTitle="ML Engineer"
        city="1.000 - 100.000"
        category="Finance"
      />
    </div>
  );
};

export default CompanyLogo;
