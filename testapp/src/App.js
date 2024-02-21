
import Hello from './mycode';

function Test(){        // ye kisi dusre .js me likho and import krlo
    return (
         <h1 Style="color:red;">something </h1>
    );
}

function App(){                // function name must be start with Capital letter
                             // single tag hi return kr skte hai isiliye empty tag okay    
    return (
        <>                      
         <Hello />
         {Test()}
        <h1>hello world</h1>
        </>
    );
}

export default App;