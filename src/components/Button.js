export default function Button(props) {
  return (
    <button
      className={`${props.color} md:mx-0 mr-1 text-white font-bold  py-2 px-6 rounded md:ml-8 ${props.onHover} duration-500`}
    >
      {props.children}
    </button>
  );
}
