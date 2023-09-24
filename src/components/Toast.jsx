import { useState } from "react";
import { Alert } from "@material-tailwind/react";

function Toast() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <Alert
          open={open}
          onClose={() => setOpen(false)}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
          className="rounded-none p-3  flex justify-center "
        >
          Free <span className="underline cursor-pointer">Pouches</span> on
          orders over 1500
        </Alert>
      )}
    </>
  );
}

export default Toast;
