
import { useParams } from "react-router-dom"
export default function User(){

    const para=useParams();
     return(
          <>
            User:{para.userId}
        </>
     )
}