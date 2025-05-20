import { constants, helpers } from '../../utils';

const Page = async ({ params }) => {
  const { slug } = params;
  const resources = await helpers.fetchData('resource');

  console.log({resources});
  console.log({slug});

  return (
    <h1>{slug} - constants: {constants.API_URL}</h1>
  );
}

export default Page;
