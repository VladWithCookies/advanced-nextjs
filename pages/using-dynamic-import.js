import dynamic from 'next/dynamic'

const Test = dynamic(
  () => import('../components/Test'),
  { loading: () => <p>Loading...</p> }
);

const UsingDynamicImport = () => (
  <>
    <p>
      Using dynamic import
    </p>
    <Test />
  </>
)

export default UsingDynamicImport
