import { useState } from "react";

const useDarkMode = () => {
    const [theme, setTheme] = useState('ligth')

    const toggleTheme = () => {
        theme === 'ligth' ? setTheme('dark') : setTheme('ligth');
    }

    return ([theme, toggleTheme]);
}

export default useDarkMode;