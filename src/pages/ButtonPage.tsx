import { Button } from "@/components/ui/button"


export default function ButtonPage(){
    const buttonTable = ["Freeze Card", "Cancel Card", "Replace Card"]

        const displayButtons = buttonTable.map((button) =>{
        return (
  
            <Button className="w-11/12 mx-auto  size-full mb-4 text-slate-600" key={button} variant="outline">{button}</Button>)    
        })

    return(
        <div className=" flex flex-col mx-auto my-10 w-11/12 xl:w-3/5 2xl:w-1/5 lg:w-1/4 md:w-1/2 sm:w-1/2">
            {displayButtons}
        </div>

    )
}

