export default function ChatItem({ name, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-4 cursor-pointer ${
        active ? "bg-blue-50" : "hover:bg-gray-100"
      }`}
    >
      {/* Avatar */}
      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
        {name[0]}
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500 truncate">
          Last message preview...
        </p>
      </div>
    </div>
  );
}