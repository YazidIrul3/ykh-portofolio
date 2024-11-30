import Image from "next/image"

const CertificateDetail = ({item}) => {
    return(
        <div className=" flex justify-center items-center w-[1000px] h-full bg-slate-900 bg-opacity-30">
            <Image src={item} className="object-contain p-2 bg-slate-50 rounded-lg" alt=""/>
        </div>
    )
}

export default CertificateDetail