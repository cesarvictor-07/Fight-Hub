const arrayFruits = ["banana", "apple", "pear", "melon"];

export default function Fruits() {
  return (
    <>
    {arrayFruits.map((item, index)=>{return <p key={index}>{item}</p>})}
    </>
  );
}