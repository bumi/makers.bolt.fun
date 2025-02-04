import { QueryClient, QueryClientProvider } from 'react-query'

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import 'react-multi-carousel/lib/styles.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter } from 'react-router-dom';


const queryClient = new QueryClient()
const parsedData = window.location.pathname.split("/");
let domain = parsedData[1];


export default function Wrapper(props: any) {

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter basename={"/" + domain}>
                    {props.children}
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
    )
}
