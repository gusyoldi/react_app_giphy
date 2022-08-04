import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({params}) {
	
	const {keyword} = params
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      console.log("%cSe Montó el Componente", "color: green");
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );

  return <div>
		{
      gifs.map(({ title, id, url }) => 
        <Gif 
				title={title}
				id={id}
				url={url}
				key={id}
				 />
      )}
    </div>
  
}
