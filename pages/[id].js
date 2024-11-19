import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps( { params } ) {
  
  const data = await getData(params.id);
  
  // const relations = await getRelationsForPerson(params.id);
  
  // const relatedPeople = []
  // for (const relation of relations) {
  //   const relatedPerson = await getData(relation.relationId.toString());
    
  //   relatedPeople.push(relatedPerson)
  // }

  console.log({ data })
  return {
    props: {
      data,
    }
  };
}


export async function getStaticPaths() {
  const paths = await getAllIds();
  console.log({ paths: JSON.stringify(paths)})
  return {
    paths,
    fallback: false
  };
}
export default function Entry({data}){
   // console.log({relatedPeople})
   console.log({data})
   const postTitle = data.post_title
  // const secondPost = data.post_title
   console.log('runing ID route');
    return(
        <Layout>
          <h1>List of Posts names</h1>
          <ul class="list-group">
            <li class="list-group-item"> {postTitle}  </li>
            <li class="list-group-item">  {secondPost} </li>
           </ul>
          
        </Layout>
    );
}