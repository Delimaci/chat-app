"use client"
import React from 'react'
import { Input } from './ui/input'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@/lib/store/user'
import { useMessage } from '@/lib/store/messages'

export default function ChatInput() {


const handleSendMessage = async (text:string) => {


 // const user = useUser((state)=>state.user);


  //const addMessage = useMessage((state)=>state.addMessage)

  // const newMessage = {

  //     id:uuidv4(),
  //     text,
  //     send_by: user?.id,
  //     is_edit:false,

  //       created_at:new Date().toISOString(),

  //     users:{
  //       id:user?.id,
  //       avatar_url: user?.user_metadata.avatar_url,
  //       created_at:new Date().toISOString(),
  //       display_name: user?.user_metadata.user_name,
  //     },

  // }



    const supabase = supabaseBrowser()



    // Call to supabase to insert the new message to this one

   const {error}= await supabase.from("messages").insert({text})

        if(error){
            toast.error(error.message);
        }

}







  return (



//KNOW WHEN A MESSAGE IS TYPED <3
    <div>
      <div className="p-5">

<Input placeholder='send message' onKeyDown={(e)=>{

if(e.key === "Enter"){
    handleSendMessage(e.currentTarget.value);


    e.currentTarget.value = "";


}

}} />

</div>
    </div>
  )
}
