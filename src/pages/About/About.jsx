import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="font-bold text-4xl border-b-4 border-orange-400 w-fit mx-8 mt-5">
          Who We Are
        </h2>
        <p className="font-semibold text-lg mt-5 px-8 py-2 leading-loose">
          <span className="font-bold text-2xl">S</span>imply Recipes is here to
          help you cook delicious meals with less stress and more joy. We offer
          recipes and cooking advice for home cooks, by home cooks. Helping
          create “kitchen wins” is what we’re all about. <br />
          Simply Recipes was founded in 2003 by Elise Bauer as a home cooking
          blog to record her favorite family recipes. Today, Simply Recipes has
          grown into a trusted resource for home cooks with more than 3,000
          tested recipes, guides, and meal plans, <br /> drawing over 15 million
          readers each month <br /> from around the world. We’re supported by a
          diverse group of recipe developers, food writers, recipe and product
          testers, photographers, and other creative professionals.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
