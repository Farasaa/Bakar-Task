import { useEffect, useState } from "react"
import CardPage from "@/pages/CardPage"
import searchCard from "@/api"
import CardTablePage from "@/pages/CardTablePage"
import ButtonPage from "@/pages/ButtonPage"
import TransactionPage from "@/pages/TransactionPage"
import {Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"





interface CardDetails{
  cardholderName : string,
  last4: string,
  expiryMonth: number,
  expiryYear: number,
  brand: string,
  cvc: string
}



function App(){
  
      const [card, setCard] = useState<CardDetails | null>(null)

      useEffect(() =>{
          const getCard = async () => {
              try{
                  const response = await searchCard()

                  setCard(response)
              }catch(err){
                  console.error("Failed to fetch card data:", err);
              }
          }

          getCard()
      },[])


        
        

  return (
  <Tabs defaultValue="issuedcards">
    <TabsList>
      <TabsTrigger value="issuedcards">
        Issued cards 
      </TabsTrigger>
      <TabsTrigger value="transactions">
        Transactions
        
      </TabsTrigger>
      </TabsList>
      <TabsContent value="issuedcards">
          <CardPage card={card} />
          <CardTablePage card={card} />
          <ButtonPage />
      </TabsContent>
      <TabsContent value="transactions">
         <TransactionPage />
      </TabsContent> 
  </Tabs>
  
  )
}

export default App
