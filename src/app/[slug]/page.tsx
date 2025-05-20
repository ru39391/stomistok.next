const Page = async ({ params }) => {
  const { slug } = params;

  return (
    <section className="section pt-5 pb-4">
      <div className="wrapper">
        <div className="section__heading section__heading_mb_sm">
          <h1 className="section__title" itemprop="name">{slug}</h1>
        </div>
        <div className="content"></div>
      </div>
    </section>
  );
}

export default Page;
