
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { HiDotsHorizontal } from "react-icons/hi"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { RxBorderDotted } from "react-icons/rx";


interface CardDetails{
    cardholderName : string,
    last4: string,
    expiryMonth: number,
    expiryYear: number,
    brand: string,
    cvc: string
}

interface CardTablePageProps {
    card: CardDetails | null;
  }



export default function CardPage({card}: CardTablePageProps){



return(
    <>
      <CardTitle>
          <div className="flex flex-row border border-solid  border-black items-center p-2.5">
                     <FaCcVisa className="text-3xl md:text-2xl sm:text-l "/>    
                      <p className="ml-1 text-slate-600">{card?.cardholderName}</p>
                     <div className="grid mr-0 ml-auto">   
                         <MdKeyboardArrowUp className="text-slate-600" />
                         <MdKeyboardArrowDown className="text-slate-600" /> 
                     </div>    
          </div>
      </CardTitle>
        <Card>
            <CardHeader>
                <CardDescription>
                    <RiVisaLine className="ml-auto text-8xl md:text-6xl sm:text-1xl text-black" />
                </CardDescription>
            </CardHeader>    
            <CardContent>
                <p>
                <RxBorderDotted className="inline-block text-6xl md:text-3xl sm:text-l text-black mb-2 mr-2" />
                <RxBorderDotted className="inline-block text-6xl md:text-3xl sm:text-l text-black mb-2 mr-2" />
                <RxBorderDotted className="inline-block text-6xl md:text-3xl sm:text-l text-black mb-2 mr-2" />
                <span className="ml-1 text-2xl md:text-1xl sm:text-l">{card?.last4}</span>
                </p>
            </CardContent>
            <CardFooter>
                
                <p className="text-sm">
                    Cardholder
                    <span className="block">{card?.cardholderName}</span>
                </p>
                <p className="text-sm">
                    Expiry date
                    <span className="block">{card?.expiryMonth}/{card?.expiryYear}</span>
                </p>
                <p className="text-sm  ">
                    CVC
                    <span><HiDotsHorizontal className="block text-black text-3xl"/> </span>
                </p>   
            
            </CardFooter>
    </Card>
    </> 

)


}