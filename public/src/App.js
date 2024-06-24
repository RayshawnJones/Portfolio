import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { devData } from "./components/data/devData";

export default function App() {
  return (
    <>
      <Header devData={devData} />
      <Main devData={devData} />
      <Footer devData={devData} />
    </>
  );
}
