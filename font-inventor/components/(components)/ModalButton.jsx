import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ModalButton({ children, titleModal, button , description }) {
  const Button = button;
  const [open, setOpen] = useState(false);

  return (
    <Dialog  open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{titleModal}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="p-2">
        {typeof children === "function" ? children({ onClose: () => setOpen(false) }) : children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
