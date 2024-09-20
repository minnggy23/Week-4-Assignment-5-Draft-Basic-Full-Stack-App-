import Link from "next/link.js";
import Layout from "../components/layout.js";
import { getSortedList } from "../lib/persons.js";

export async function getStaticProps(){
    const allData =getSortedList();
    return{
        props: {allData}
    };
} 


/// Displays page
export default function Home({allData}){
    return(
        <Layout home>
        <h1>List of Names.</h1>
        <div className="list-group">
            {allData.map(
                ({id, name}) => (
                    <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                        {name}
                    </Link>
                )
            )

            }
        </div>
        </Layout>
    );
}