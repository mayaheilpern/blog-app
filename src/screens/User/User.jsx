import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";


export default function User() {
    const { id } = useParams()
    return( 
    <div> 
        <Layout>
            <h1>Hello</h1>
        </Layout>
    </div> 
    );
}
