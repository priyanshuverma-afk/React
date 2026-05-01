export default function Avatar({ name, online = false, size = "md", gradient = "from-purple-500 to-pink-500" }) {
    const sizes = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
    };

    return (
        <div className="relative flex-shrink-0">
            <div className={`${sizes[size]} rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-semibold`}>
                {name[0].toUpperCase()}
            </div>
            {online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            )}
        </div>
    );
}