import React from 'react';

type buttonProps = {
    href: string,
    classe: string,
    content: string,
    id?: string
}

const Buttonlink = (props: buttonProps) => {
    console.log(props)
    return (
        <a href={props.href} className={props.classe} id={props.id}>
            {props.content}
        </a>
    )
} 

export default Buttonlink;