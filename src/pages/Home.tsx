import React, { ReactElement } from 'react'

interface Props {

}

export default function Home({ }: Props): ReactElement {
    return (
        <div style={{ border:'1px solid #ccc',height:'50vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            Home
        </div>
    )
}
