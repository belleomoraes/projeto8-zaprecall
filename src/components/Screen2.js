import React from "react";
import Head from "./Head"
import Counter from "./Counter"
import Questions from "./Questions"
export default function Screen2() {
   const [open, setOpen] = React.useState(true);

return (
   <>
   <Head />
   <Questions open = { open } setOpen = { setOpen }/>
   <Counter />
   </>
)

}

