/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    emerald: "#10b981",
                    slate: "#1e293b",
                    navy: "#0f172a",
                    amber: "#f59e0b",
                }
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
            }
        },
    },
    plugins: [],
}
