"use client";

import { useBradescoModal } from "@/components/home/client-modals/bradesco-modal"

export default function Bradesco({ className }: { className?: string }) {
    const { BradescoModal, setShowBradescoModal } = useBradescoModal();

    return(
        <div>
            <BradescoModal />
            <button onClick={() => setShowBradescoModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="148" height="148" viewBox="0 0 123 23.1">
  <title>Banco Bradesco</title>
  <path d="M34.6,9.8a6.2,6.2,0,0,0-2.6.6V4.1a11.8,11.8,0,0,0-2.9,1.6A1.6,1.6,0,0,0,28.5,7V22.4a13.9,13.9,0,0,0,4.6.7c4.6,0,7.2-2.8,7.2-6.8S38.5,9.8,34.6,9.8ZM33.3,20.3a3.2,3.2,0,0,1-1.3-.2v-7a5.4,5.4,0,0,1,2-.4c1.8,0,2.7,1.2,2.7,3.5S35.6,20.3,33.3,20.3ZM11.6,16.4l-1.4.8c-.2.1-.2.2-.2.4v5.1c0,.2.1.3.2.3h1.4V16.4ZM49.2,9.9a4.2,4.2,0,0,0-3.5,1.8,12.4,12.4,0,0,0-.4-1.6l-1.4-.2-1.4.2V22.8a4.4,4.4,0,0,0,1.7.2l1.8-.2V16.6c0-2.5,1.3-3.8,3-3.8h1.2a8.8,8.8,0,0,0,0-2.8Zm-35,5-1.8,1h-.1v6.9h2a.4.4,0,0,0,.4-.4V15.2A.3.3,0,0,0,14.2,14.9Zm-2.8-10A22.5,22.5,0,0,0,7,5.3a8.2,8.2,0,0,1,6.6-3.2A9,9,0,0,1,19,3.9c.2.2.4.3.6.1a.4.4,0,0,0,0-.6A9.3,9.3,0,0,0,12.2,0,9.5,9.5,0,0,0,3.5,6.1L.3,7.4q-.4.3-.3.6a.4.4,0,0,0,.6.2,18.3,18.3,0,0,1,2.5-.6A6.1,6.1,0,0,0,3,9a9.3,9.3,0,0,0,4.3,8c.2.1.5.1.6-.1s.1-.4-.1-.6a7.9,7.9,0,0,1-2.6-6,6.4,6.4,0,0,1,.7-3.1L8.7,7c6.8,0,12.6,2.3,12.6,5.2s-1.9,3-4.2,4c-.5.2-.5.4-.5.6s.3.3.6.2c4-1.2,6.9-3.4,6.9-5.9S18.5,4.9,11.4,4.9ZM71.3,7v3l-1.8-.2c-3.9,0-6.5,2.6-6.5,6.8s2.5,6.5,6.5,6.5a15.1,15.1,0,0,0,5.3-.8V4.1a11.8,11.8,0,0,0-2.9,1.6A1.4,1.4,0,0,0,71.3,7Zm0,13.1a4.1,4.1,0,0,1-1.5.2c-2.3,0-3.2-1.5-3.2-3.7s.9-4,3.2-4l1.5.2Zm35.8.2c-1.7,0-2.9-1.4-2.9-3.8s1-3.8,2.9-3.8a5.9,5.9,0,0,1,2.3.4,6,6,0,0,1,1.2-2.4,7.5,7.5,0,0,0-3.9-.9c-3.9,0-6.1,2.7-6.1,6.7s2.3,6.6,6.2,6.6a8,8,0,0,0,3.9-.8,9.7,9.7,0,0,1-1.4-2.5A4.7,4.7,0,0,1,107.1,20.3ZM55.7,9.8a15.3,15.3,0,0,0-3.8.4,6.6,6.6,0,0,0,0,2.8,10.6,10.6,0,0,1,3.2-.4c1.8,0,2.7.7,2.7,2.2V15l-1.7-.2c-2.9,0-5.5,1.1-5.5,4s2.3,4.3,5.7,4.3a19.9,19.9,0,0,0,4.8-.7V15.1C61.1,11.6,59.2,9.9,55.7,9.8Zm2.1,10.5H56.3c-1.6,0-2.5-.5-2.5-1.6s.9-1.6,2.5-1.6h1.5ZM116.9,9.8c-3.9,0-6.1,2.7-6.1,6.7s2.3,6.6,6.1,6.6,6.1-2.6,6.1-6.6S120.8,9.8,116.9,9.8Zm0,10.5c-2,0-2.5-1.6-2.5-3.8s.5-3.9,2.5-3.9,2.6,1.6,2.6,3.9S118.8,20.3,116.9,20.3ZM82.8,9.8c-3.7,0-6,2.5-6,6.7s2.4,6.6,6.6,6.6a9.9,9.9,0,0,0,4-.7,6.2,6.2,0,0,0,0-2.7,11.8,11.8,0,0,1-3.6.6c-2,0-3.3-.8-3.6-2.8h7.9a9.9,9.9,0,0,0,.2-1.8C88.3,11.9,86.1,9.8,82.8,9.8Zm-2.6,5.1a2.5,2.5,0,0,1,2.6-2.4c1.6,0,2.2,1,2.2,2.4Zm16.1.4-1.5-.6c-.8-.4-1.2-.6-1.2-1.2s.7-1,1.6-1a11,11,0,0,1,3.3.6,5.7,5.7,0,0,0,0-2.6,8.3,8.3,0,0,0-3.8-.7C92,9.8,90,11.2,90,13.4s.8,3,3.2,4l1.1.4c1,.4,1.3.7,1.3,1.4s-1,1.1-1.8,1.1a9.9,9.9,0,0,1-3.8-.7,4.2,4.2,0,0,0,0,2.7,9.4,9.4,0,0,0,4.3.8c2.7,0,4.9-1.4,4.9-3.9S98.3,16.1,96.3,15.3Z" fill="#E5173F"/>
</svg>

            </button>
        </div>

    )  
}