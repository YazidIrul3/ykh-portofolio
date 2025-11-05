import Image from "next/image";

const CertificateDetail = ({ item }) => {
  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Image
        src={item}
        className="object-contain p-2 md:max-w-lg max-w-sm  min-h-fit bg-slate-50 rounded-lg"
        alt=""
      />
    </div>
  );
};

export default CertificateDetail;
