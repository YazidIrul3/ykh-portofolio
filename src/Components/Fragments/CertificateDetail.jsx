import Image from "next/image"

const CertificateDetail = ({item}) => {
    return(
        <div className=" flex justify-center items-center bg-slate-900 bg-opacity-30 mx-2">
            <Image src={item} className="object-contain p-2 w-fit min-h-[400px] bg-slate-50 rounded-lg" alt=""/>
        </div>
    )
}

export default CertificateDetail