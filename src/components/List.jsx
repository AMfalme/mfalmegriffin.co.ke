import React, {useEffect} from 'react'

export default function List(props) {


    useEffect(() => {
        console.log(props);
      });
  return (
    

      
            <p class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {props.items.map((item) => (
                  <div class="relative pl-9">
                    
                    <dd class="inline text-sm">{item}</dd>
                  </div>
                ))}
              </p>
    
  )
}
