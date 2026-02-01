const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-green-35">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Footwear PDS For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Footwear PDS is ideal wherever footwear patterns must be
          engineered digitally to improve accuracy, speed, and material
          efficiency.
        </p>

        {/* Footwear brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Footwear brands and manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Sports, fashion, casual, formal, and safety footwear factories
              that need precise uppers, linings, reinforcements, and components
              across size ranges.
            </li>
            <li>
              Units wanting standardized digital pattern libraries so new
              lasts, styles, and size runs can be developed with minimal
              manual rework.
            </li>
          </ul>
        </div>

        {/* OEM / ODM */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            OEM / ODM suppliers and export units
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Manufacturers developing and producing footwear collections for
              international brands and retailers under OEM/ODM contracts.
            </li>
            <li>
              Technical teams that must share accurate digital patterns and
              grading data with multiple buyers and factories worldwide.
            </li>
          </ul>
        </div>

        {/* Pattern engineers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Independent pattern engineers and design studios
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Freelance modelers and pattern technologists providing 2D
              construction and grading services to various brands and
              factories.
            </li>
            <li>
              Design and technical studios converting designer sketches and
              3D concepts into production-ready 2D patterns for cutting.
            </li>
          </ul>
        </div>

        {/* Orthopaedic & safety */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Orthopaedic, safety, and specialty footwear producers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Companies making orthopaedic, medical, safety, and work shoes
              where fit, functionality, and repeatability are critical.
            </li>
            <li>
              Units that frequently customize or adapt patterns for specific
              foot conditions or occupational standards.
            </li>
          </ul>
        </div>

        {/* Training */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Training institutes and sector skill centres
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Footwear design schools, FDDI-type institutes, and polytechnics
              teaching modern CAD-based shoe pattern engineering.
            </li>
            <li>
              Government and industry skill centres preparing modelers and
              pattern technologists for employment in large and MSME footwear
              units.
            </li>
          </ul>
        </div>

        {/* Social enterprises */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Social enterprises and MSME footwear clusters
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              NGOs, cooperatives, and social businesses supporting micro and
              small footwear units with shared digital pattern services.
            </li>
            <li>
              Cluster centres that centralize pattern development and grading,
              enabling local units to focus on stitching and assembly.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
