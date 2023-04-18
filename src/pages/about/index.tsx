import React from 'react'
import Image from 'next/image'
import style from '../../styles/about.module.css'

const index = () => {
    return (
        <div className={style.container}
        ><div>About</div>
            <div className={style.wrap}><Image
                src={"/me.jpeg"}
                alt="Picture of the author"
                width={500}
                height={500} />
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid consequatur similique quos, illo, magni veritatis modi placeat blanditiis, nemo molestiae atque cumque optio ipsam sed eius repellat. Hic, porro dignissimos!
                    Fugit ea quibusdam sit nobis enim esse, laborum voluptas <br /> laudantium assumenda, facere, natus sunt temporibus ullam maxime debitis unde ipsum dicta quae neque rerum dolorem necessitatibus harum. Inventore, fugit distinctio.
                    Odio ducimus provident dolorem ipsa iusto repellat, iure aspernatur odit in quibusdam repellendus voluptatibus sit voluptatum saepe sunt quas accusamus temporibus hic itaque? Animi possimus ullam qui. Enim, ex fugiat.</div>
            </div>
        </div>
    )
}

export default index