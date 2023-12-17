"use client";

import { useItauModal } from "@/components/home/tech-modals/Itau-modal"

export default function Itau({ className }: { className?: string }) {
    const { ItauModal, setShowItauModal } = useItauModal();
    return(
        <div>
            <ItauModal />
            <button onClick={() => setShowItauModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 192.756 192.756"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0V0z"/><path d="M40.673 8.504l111.673.066c17.529 0 31.973 14.443 31.906 32.038V152.28c0 17.596-14.443 31.973-32.037 31.973l-111.739-.066c-17.595-.064-31.972-14.441-31.972-32.037l.131-111.674c0-17.594 14.378-32.038 32.038-31.972z" fill="#33348e"/><path d="M159.502 88.664h-12.736l-5.252 9.979h8.928l9.06-9.979zm8.469 16.217h-12.408v26.785c0 8.207-5.516 10.57-9.584 10.57-3.875 0-8.143-1.445-8.076-8.602V104.88h-12.408l-.066 30.527c0 11.816 6.764 17.068 16.086 17.068 6.498.066 11.555-2.758 14.377-7.746h.131v6.5h11.949v-46.348h-.001zM115.777 117.156c0-11.488-12.078-13.523-18.775-13.523-9.651 0-19.696 2.035-21.206 16.215H87.81c.394-2.691 1.51-6.434 7.681-6.434 3.217 0 8.208.264 8.208 5.385 0 2.625-2.43 3.414-4.4 3.676l-11.16 1.641c-7.944 1.117-13.852 5.777-13.852 14.838 0 9.584 7.353 13.523 14.377 13.523 8.535 0 12.539-3.873 15.297-6.695.262 2.561.459 3.217 1.182 5.449l10.701-.066c0-5.121-.066-8.863-.066-8.928v-25.081h-.001zM62.863 88.664H50.455v16.15h-6.434v8.732h6.368v28.164c0 5.973 1.904 10.045 12.671 10.045h1.642c1.969 0 3.938-.133 5.843-.197V142.3c-.854.066-1.772.197-2.561.197-5.055 0-5.187-1.051-5.187-3.809l.066-25.143h7.747v-8.732h-7.747V88.664zM38.31 88.598H24.917l-.066 62.566h13.393l.066-62.566z" fill="#fff22d"/><path d="M103.699 134.619v-5.973c-1.248.984-3.35 1.771-8.47 2.494-4.661.787-8.469 1.969-8.469 7.025 0 4.201 3.414 5.58 5.777 5.58 5.516.001 11.162-3.479 11.162-9.126z" fill="#33348e"/></g></svg>
            </button>
        </div>      

    )  
}