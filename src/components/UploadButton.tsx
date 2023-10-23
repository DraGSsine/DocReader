import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import React,{useState} from 'react'
import { Button } from './ui/button'

function UploadButton() {
    const [isOpen,setIsOpen] = useState<boolean>(false)
  return (
    <Dialog open={isOpen} onOpenChange={(v)=>{
        if(!v) setIsOpen(v)
    }}>
        <DialogTrigger onClick={()=>setIsOpen(true)} asChild>
            <Button>Upload PDF</Button>
        </DialogTrigger>
        <DialogContent>
            example
        </DialogContent>
    </Dialog>
  )
}

export default UploadButton