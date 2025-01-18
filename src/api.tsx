import axios from 'axios';


const searchCard = async () => {
   const response = await axios.get('https://www.bakarcompany.somee.com/api/IssueCard/get-card-data',{

        
    })
    console.log(response.data)
    return response.data
    
}


export default searchCard