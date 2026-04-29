import { useTheme } from "../ThemeContext/ThemeProvider";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <h2>My App</h2>
            <button onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </div>
    );
};

export default Navbar;