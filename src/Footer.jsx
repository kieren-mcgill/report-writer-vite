

const Footer = () => {


    return (
        <div className="flex h-36 w-full bg-black items-center z-50 relative">
            <p className="text-xs text-white absolute left-1/2 bottom-2 -translate-x-1/2" >© Copyright {new Date().getFullYear()} - Kieren McGill</p>
        </div>
    )
}
export default Footer