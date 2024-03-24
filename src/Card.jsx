function Card({ a ,option,setoption}) {
    // console.log(a);
     const arr = [];
     for (let i = 1; i <= 5000; i++) {
       arr.push(i);
     }
     return (
         <div className="max-w-sm rounded overflow-hidden shadow-lg border-4 border-black">
           <img className="w-full" src={a.url} alt="Sunset in the mountains" />
           <div className="px-6 py-4">
             <div className="font-bold text-xl mb-2">
               <select value={option} onChange={(e) => setoption(e.target.value)}>
                 {arr.map((id) => (
                   <option option={id} value={id}>
                     {id}
                   </option>
                 ))}
               </select>
             </div>
             <p className="text-gray-700 text-base font-bold">
               Title:
               <span className="text-red-600">{a.title}</span> <br />
               ImgLink:<span className="text-blue-600">{a.thumbnailUrl}</span>
             </p>
           </div>
         </div>
     );
   }
   export default Card;