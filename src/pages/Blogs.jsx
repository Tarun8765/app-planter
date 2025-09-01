import BannerSection from "../components/common/BannerSection";
import BlogSection from "../components/HomeSections/BlogSection";
import { Helmet } from "react-helmet";

function Blogs() {
  return (
    <>
      <Helmet>
        <title>Blogs & Insights | App Planter Technologies</title>
        <meta
          name="description"
          content="Read the latest blogs, articles, and insights from App Planter Technologies on web development, mobile apps, UI/UX, IT consultancy, and emerging technology trends."
        />
        <meta
          name="keywords"
          content="App Planter blogs, technology insights, IT articles, web development tips, app development blogs, UI/UX design, IT consultancy trends"
        />
      </Helmet>
      <BannerSection heading={"Blogs"} />
      <BlogSection />
    </>
  );
}

export default Blogs;
