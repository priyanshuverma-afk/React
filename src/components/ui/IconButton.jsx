export default function IconButton({ icon: Icon, onClick, size = 18, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-full hover:bg-gray-100 text-gray-600 transition ${className}`}
        >
            <Icon size={size} />
        </button>
    );
}