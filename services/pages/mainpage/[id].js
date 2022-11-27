import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'


export default function car({car}){
    const router = useRouter();
    const {id} = router.query

    
    return(
        <div>
            <head>
                <title>Services</title> {/* will change to the correct title later on */}
            </head>
        </div>
    )
}