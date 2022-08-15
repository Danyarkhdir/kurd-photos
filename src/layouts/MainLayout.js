import Navbar from "../components/Navbar";
export default function MainLayout(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
