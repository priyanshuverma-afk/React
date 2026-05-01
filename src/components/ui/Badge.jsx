export default function Badge({ count }) {
    if (!count || count === 0) return null;

    return (
        <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
            {count}
        </span>
    );
}