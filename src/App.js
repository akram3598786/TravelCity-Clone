import TopSection from './componenets/topsection';
import { ChakraProvider } from '@chakra-ui/react';
import { Grid1 } from './componenets/grid1';
import Grid2 from './componenets/grid2';
function App() {
  return (
     <ChakraProvider>
         <div className="App">
           <TopSection/>
           <Grid1/>
           <Grid2/>
          </div>
     </ChakraProvider>
  );
}

export default App;
