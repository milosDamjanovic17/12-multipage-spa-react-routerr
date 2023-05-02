import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function Error(){

    const error = useRouteError();
    
    let title = 'An error ocurred';
    let message = 'Something went wrong!';

    if(error.status === 500){
        message = JSON.parse(error.data).message;
        console.log(JSON.parse(error.data).status)
    };

    if(error.status === 404){
        title = 'Not found';
        message = 'Couldnt find path u asked for'
    };

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}

export default Error;