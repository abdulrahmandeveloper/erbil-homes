import CustomCard from "@/components/custom-card";

const CardsSection = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h6 className="text-neutral-700 font-bold text-4xl max-w-3xl text-center mb-16">
        Quickly find the home you want using our simple and effective search
        filters
      </h6>
      <div className="flex gap-10 flex-nowrap">
        <CustomCard
          url="/images/landing-search1.png"
          title="Trustworthy and verified Listings"
          description="Discover the best rental options with user reviews and ratings"
          buttonTitle="Explore"
          buttonPath="/search"
        ></CustomCard>
        <CustomCard
          url="/images/landing-search2.png"
          title="Browse rental listings with ease"
          description="Get access to user reviews and ratings for a better understanding of rental options"
          buttonTitle="Search"
          buttonPath="/search"
        ></CustomCard>
        <CustomCard
          url="/images/landing-search3.png"
          title="Simplify your rental ability with advanced search"
          description="Find trustworthy and verified rental listings to ensure a hassle-free experience"
          buttonTitle="Discover"
          buttonPath="/search"
        ></CustomCard>
      </div>
    </div>
  );
};

export default CardsSection;
