import React from 'react'

export default function Header() {
    const info = () => {
        const phuc = {
            id:'123',
            fullname:'phuc'
        }
        return(
           <div>
                <h1>phuc{phuc.id}</h1>
                <h2>phuc{phuc.fullname}</h2>
           </div> 
        )

    }

    return (
        <div>Header{info()}</div>
    )         
}
