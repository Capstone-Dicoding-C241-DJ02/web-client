
import MainLayout from './layouts/MainLayout';
import Column from './layouts/Column';

function App() {
  return (
    <MainLayout>
      <Column span={'col-span-1'} className={'hidden md:block'}></Column>
      <Column span={'col-span-2'}></Column>
    </MainLayout>
  );
}

export default App;
