


export default function Item({name, quantity, category}) {
    
    return (
      <div className="p-2 m-4 bg-pink-200 border-4 border-green-900 max-w-60">
        <h2 className="font-bold">{name}</h2>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    );
  }