import React from 'react'
import style from '../../styles/Home.module.css'

function Form() {
    return (
        <form className={style.form} action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name here...' />
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Email here...' />
            <button>Send</button>
        </form>
    )
}

export default Form