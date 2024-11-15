//import '../testing-library/jest-dom';
//import { render, screen } from '../testing-library/react'

import Link from "next/link";
import Layout from "../components/layout";
import { getSortedList } from "../lib/data";

export async function getStaticProps(){
    const allData = await getSortedList();
    return{
        props: {allData}
    };
} 


/// Displays page
export default function Home({allData}){
    return(
        <Layout home>
        {JSON.stringify(allData)}
        </Layout>
    );
}