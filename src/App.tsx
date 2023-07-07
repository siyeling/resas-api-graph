import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Setdata } from './component/Setdata';

export const queryClient = () => {
    return new QueryClient();
};

const App: React.FunctionComponent = () => {
    return (
        <QueryClientProvider client={queryClient()}>
            <>
                <Setdata />
            </>
        </QueryClientProvider>
    );
};

export default App;
