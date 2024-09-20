import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/persons';
import {getRelationsForPerson} from '../lib/relations';

export async function getStaticProps( { params } ) {
  
  const personData = await getData(params.id);
  
  const relations = await getRelationsForPerson(params.id);
  
  const relatedPeople = []
  for (const relation of relations) {
    const relatedPerson = await getData(relation.relationId.toString());
    
    relatedPeople.push(relatedPerson)
  }

  
  return {
    props: {
      personData,
      relatedPeople,
    }
  };
}


export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}
export default function Entry({personData, relatedPeople}){
   // console.log({relatedPeople})
    return(
        <Layout>
            <article className="card col-6">
                <div className="card-body">
                    <h5 className="card-title">Name: {personData.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Birthday: {personData.birthday}</h6>
                    <p className="card-text">Age: {personData.age}</p>
                   
                </div>
                <div>
                 <h2>Friends</h2> 
                 <ul>
  {relatedPeople.map((person, index) => (
    <li key={index}>
      <strong>{person.name}</strong> (ID: {person.id})
    </li>
  ))}
</ul>

                </div>
            </article>    
        </Layout>
    );
}