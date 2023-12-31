import React from "react"

const MainLayout = ({children}:{children:React.ReactNode})=> {

    return (
        <main className="max-w-screen-lg mx-auto bg-slate-300 min-h-screen px-20">
            {children}
        </main>
    )
}

export default MainLayout