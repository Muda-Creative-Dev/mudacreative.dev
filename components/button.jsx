
export const OutlineButton = ({ title, onTap, icon }) => {
    return (
        <button
            onClick={onTap}
            className="rounded-lg flex items-center border border-black text-sm md:text-md  p-2 md:p-3 hover:bg-primary hover:text-[#ffffff] transition duration-500">
            {title}
            {icon}
        </button>
    )
}