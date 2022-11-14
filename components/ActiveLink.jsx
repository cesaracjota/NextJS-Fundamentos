import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const styles = {
    color: '#0070f3',
    textDecoration: 'none',
    cursor: 'pointer',
}

export const ActiveLink = ({ href, text }) => {

    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a style={ asPath === href ? styles : null }>{text}</a>
        </Link>
    )
}
