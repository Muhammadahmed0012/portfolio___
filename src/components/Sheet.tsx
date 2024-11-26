import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { AlignRight } from 'lucide-react';
  
export default function Sheets (){
    return(<>
        <Sheet>
  <SheetTrigger><AlignRight color="white" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
        <ul className="text-white space-y-8 pt-20 hover:underline   ">
             <li><a href="/about" className="hover:text-stone-600">about</a></li> 
              <li><a href="/book" className="hover:text-stone-600">book</a></li> 
              <li><a href="/portfolio" className="hover:text-stone-600">portfolio</a></li>
             <li><a href="/blog" className="hover:text-stone-600">blog</a></li> 
             <li><a href="/contact" className="hover:text-stone-600">contact</a></li> 

                </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    
    
    </>)
}
 