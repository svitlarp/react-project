
// export default function ColorSwitch({onChangeColor}) {
//   return (
//     <button onClick={() => onChangeColor()}>
//       Change color
//     </button>
//   );
// }

export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button onClick={evt => {
      evt.stopPropagation();
      onChangeColor();
     }}>
      Change color
    </button>
  );
}