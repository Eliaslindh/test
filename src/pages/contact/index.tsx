import React from 'react'
import Form from '@/components/form/Form'
import style from '../../styles/Home.module.css'

function contact() {
    return (
        <div>
            <h1>Contacts</h1>
            <div className={style.main}>
                <Form />
            </div>
        </div>
    )
}

export default contact